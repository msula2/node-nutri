const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 3001 ;

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

// app.use(
//   // cors({
//   //   credentials: true,
//   //   origin: "https://react-nutri.onrender.com/"
//   // })
// );


let db;
if(process.env.TEST == false){
  db = require('knex')({
  client: 'pg',
  connection: {
    connectionString: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    ssl: {rejectUnauthorized: false }
  }
});
} else{
  db = require('knex')({
      client: 'pg',
      version: '16.2',
      connection: {
        host : process.env.DB_HOST,
        port : process.env.DB_PORT,
        user : process.env.USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME
      }
    });
}

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 6000000 
  },
  store: new session.MemoryStore()
}));


const checkSignIn = (req, res, next) => {
  if(req.session.user){
    console.log("User is on the session");
    next();    
  } else {
    console.log("User is not on the session");
    return res.json({
      result: "failed",
      loggedIn: false
    })
  }
}

app.post("/login", (req, res) => {
  const {username, password} = req.body;
  console.log("Username:", username, "Password: ", password);
  db('users')
    .where({
      username: username,
      password:  password
    }).select('id', 'username')
    .then(response => {
      if (response.length == 0){
        res.json({
          result: "failed",
          error: "Incorrect username/password entered"
        })
      }
      else{
        req.session.user = response[0];
        console.log(req.session);
        res.json({
          result: "success", 
          user: response[0]
        });
      }
      
  })
  .catch(err => {
    console.log(err);
    res.status(400).json({
      result: "failed",
      error: "Error establishing a database connection"
    })
  });  
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  db('users')
    .where('username', username)
    .first()
    .then(existingUser => {
      if (existingUser) {
        throw new Error('Username already exists');
      } else {
        return db('users')
          .returning('*')
          .insert({
            username: username,
            password: password
          });
      }
    })
    .then(response => {
      res.json({
        result: "success",
        message: "Registration successful"
      });
    })
    .catch(err => {
      console.error("Error occurred during registration:", err);
      res.status(400).json({ error: err.message });
    });  
});

app.get("/user", checkSignIn, (req, res) => {
  if(req.session.user){
    console.log("logged-in")
    res.json({
      loggedIn: true,
      user: req.session.user
    })
    
  } else{
    console.log("timed-out")
  }
});

app.delete("/recipe/delete", (req, res) => {
  const { title } = req.body;
  db('recipes')
    .where('title', title)
    .first()
    .then(existingUser => {
      if (existingUser) {
        return db('recipes')
          .returning('*')
          .where('title', title)
          .delete();
      } else {
        throw new Error('No Recipe exists with this title');
      }
    })
    .then(response => {
      res.json({
        result: "success",
        message: "Recipe deleted successfully"
      });
    })
    .catch(err => {
      console.error("Error occurred while deleting recipe:", err);
      res.status(400).json({ error: err.message });
    });  
});

app.put("/recipe", (req, res) => {
  const { title, description = "", ingredients, instructions } = req.body;
  db('recipes')
    .where('title', title)
    .first()
    .then(existingUser => {
      if (existingUser) {
        return db('recipes')
          .returning('*')
          .where('title', title)
          .update({
            description: description,
            ingredients: ingredients,
            instructions: instructions
          });
      } else {
        throw new Error('No Recipe exists with this title');
      }
    })
    .then(response => {
      res.json({
        result: "success",
        message: "Recipe updated successfully"
      });
    })
    .catch(err => {
      console.error("Error occurred while updating recipe:", err);
      res.status(400).json({ error: err.message });
    });  
});


app.post("/recipe/add", (req, res) => {
  const { title, description, ingredients, instructions } = req.body;

  db.transaction(trx => {
    trx('recipes')
      .insert({
        title: title,
        description: description,
        ingredients: ingredients.map(ingredient => `(${ingredient.label})`).join(', '),
        instructions: instructions.map(instruction => instruction.value).join(', ')
      })
      .returning('id')
      .then(([recipeId]) => {
        const ingredientPromises = ingredients.map(ingredient => {
          return trx('items_recipes')
            .insert({
              food_item: ingredient.value,
              recipe: title,
              recipe_id: recipeId.id,
              amount: ingredient.serving_size
            });
        });

        return Promise.all(ingredientPromises)
          .then(() => trx.commit())
          .then(() => {
            res.json({
              result: "success",
              message: "Recipe added successfully"
            });
          });
      })
      .catch(err => {
        console.error("Error occurred while adding recipe:", err);
        trx.rollback();
        res.status(400).json({
          result: "failed",
          message: "Error establishing a database connection"
        });
      });
  });
});



app.get("/recipes/:title/get", (req, res) => {
  let title = req.params.title;
  db('recipes')
    .where('title', 'like', title[0] + '%')
    .select('title', 'description', 'ingredients', 'instructions', 'id')
    .then(response => {
      if (response.length == 0) {
        res.json({
          result: "failed",
          error: "Recipe not found"
        });
      } else {
        res.json({
          result: "success",
          data: response
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        result: "failed",
        error: "Error establishing a database connection"
      });
    });
});

app.get("/recipes/:recipeId/calories/get", (req, res) => {
  const recipeId = req.params.recipeId;

  db.select(
      'food_items.serving_size',
      'food_items.serving_unit',
      'food_items.label',
      'food_groups.calories',
      'food_groups.carbohydrate',
      'food_groups.protien',
      'food_groups.fat',
      'items_recipes.amount'
  )
  .from('items_recipes')
  .join('food_items', 'items_recipes.food_item', 'food_items.value')
  .join('food_groups', 'food_items.foodgroup', 'food_groups.value')
  .where('items_recipes.recipe_id', recipeId)
  .then((response) => {
    console.log(response);
    if (response.length !== 0) {
      // Define an array to store the breakdown for each item
      const breakdowns = [];
  
      // Iterate over each item in the response
      response.forEach(item => {
          let serving_size = parseFloat(item.serving_size);
          serving_size = 1 / serving_size;
          let amount = item.amount != undefined && item.amount != null ? parseFloat(item.amount) : 1;
          let calories_per_serving = (serving_size * item.calories) * amount;
          let carbs_per_serving = (serving_size * item.carbohydrate) * amount;
          let prots_per_serving = (serving_size * item.protien) * amount;
          let fats_per_serving = (serving_size * item.fat) * amount;
  
          // Calculate total calories for each nutrient
          const total_calories = (carbs_per_serving * 4) + (prots_per_serving * 4) + (fats_per_serving * 9);
  
          // Push the breakdown for the current item to the breakdowns array
          breakdowns.push({
              name: item.food_item,
              calories: calories_per_serving.toFixed(1),
              breakdown: {
                  grams: [
                      { name: 'Proteins', value: parseFloat(prots_per_serving.toFixed(1)) },
                      { name: 'Carbohydrates', value: parseFloat(carbs_per_serving.toFixed(1)) },
                      { name: 'Fats', value: parseFloat(fats_per_serving.toFixed(1))}
                  ],
                  calories: {
                      carbohydrates: (carbs_per_serving * 4).toFixed(1),
                      proteins: (prots_per_serving * 4).toFixed(1),
                      fats: (fats_per_serving * 9).toFixed(1),
                      total: total_calories.toFixed(1)
                  }
              },
              serving_unit: item.serving_unit,
              label: item.label ,
              amount: amount.toString()
          });
      });
  
      // Send the breakdowns array as the response
      res.json({
          result: "success",
          items: breakdowns
      });
  } else {
      // Handle case where no items are found
      res.json({
          result: "success",
          items: []
      });
  }
  })
  .catch((error) => {
      // Handle database error
      console.error(error);
      res.status(500).json({
          result: "error",
          message: "Error retrieving recipe information"
      });
  });
});



app.get("/calories/groups/:group/categories/get", (req, res) => {
  db("food_categories")
    .where({
      foodgroup: req.params.group
    })
    .select('label', 'value')
    .then(response => {
      if (response.length != 0){
        res.json({
          result: "success",
          categories: response
        })
      }
      else{
        res.json({
          result: "success",
          categories: []
        })

      }
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        result: "failed",
        error: "Error establishing a database connection"
      })
    });
});


app.get("/calories/categories/:category/items/get", (req, res) => {
  db("food_items")
    .where({
      foodcategory: req.params.category
    })
    .select('label', 'value')
    .then(response => {
      if (response.length != 0){
        res.json({
          result: "success",
          items: response
        })
      }
      else{
        res.json({
          result: "success",
          items: []
        })

      }
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        result: "failed",
        error: "Error establishing a database connection"
      })
    });
});

app.get("/calories/items/:item/get", (req, res) => {
  db('food_items')
  .select(
    'food_items.serving_size',
    'food_items.serving_unit',
    'food_groups.calories',
    'food_groups.carbohydrate',
    'food_groups.protien',
    'food_groups.fat'
  )
  .join('food_groups', 'food_items.foodgroup', 'food_groups.value')
  .where('food_items.value', req.params.item)
  .then((response) => {
    if (response.length != 0){
      let serving_size = parseFloat(response[0].serving_size);

      serving_size = 1 / serving_size;
      let calories_per_serving = serving_size * response[0].calories;
      let carbs_per_serving = serving_size * response[0].carbohydrate;
      let prots_per_serving = serving_size * response[0].protien;
      let fats_per_serving = serving_size * response[0].fat;

      let ret = {
        Calories: calories_per_serving,
        breakdown:{
          grams: [
            {name: 'Proteins', value: prots_per_serving},
            {name: 'Carbohydrates', value: carbs_per_serving},
            {name: 'Fats', value: fats_per_serving }
          ],
          calories: {
            carbohydrates: carbs_per_serving * 4,
            proteins: prots_per_serving * 4,
            fats: fats_per_serving * 9,
            total: (carbs_per_serving * 4) + (prots_per_serving * 4) + (fats_per_serving * 9)

          }
        }, 
        serving_unit: response[0].serving_unit
      }

      res.json({
        result: "success",
        item: ret
      })
    }
    else{
      res.json({
        result: "success",
        item: {}
      })

    }
  })
  .catch(err => {
    console.log(err);
    res.status(400).json({
      result: "failed",
      error: "Error establishing a database connection"
    })
  });
  

});


app.post("/calories/user/:user/meal/add", checkSignIn, async (req, res) => {
  const { name, datetime, meal_ingredients } = req.body;
  const user = req.params.user;

  const mealData = {
    name: name,
    datetime: datetime,
    userid: user
  }

  let mealIngredientsData = meal_ingredients;

  try {
    await db.transaction(async (trx) => {
      const [mealId] = await trx('meals').insert(mealData).returning('id');

      const mealIngredients = mealIngredientsData.map((ingredient) => ({
        meal_id: mealId.id,
        meal_name: mealData.name,
        food_item_value: ingredient.value,
        food_item_label: ingredient.label,
        quantity: ingredient.serving_size
      }));

      await trx('meal_ingredients').insert(mealIngredients);

      await trx.commit();

      res.status(200).json({
        result: "success",
        message: "Successfully added to table"
      });
    });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(400).json({
      result: "failed",
      message: "Error establishing a database connection"
    });
  }
});

app.delete("/calories/user/:user/meal/:mealId/delete", checkSignIn, async (req, res) => {
  const mealId = req.params.mealId; 
  const user = req.params.user;

  try {
    const existingMeal = await db('meals')
      .where({
        id: mealId,
        userid: user
      })
      .first();

    if (!existingMeal) {
      throw new Error('No meal exists with this ID for the current user');
    }

    await db.transaction(async (trx) => {
      await trx('meals')
        .where({
          id: mealId,
          userid: user
        })
        .del();

      await trx('meal_ingredients')
        .where('meal_id', mealId)
        .del();

      await trx.commit();

      res.status(200).json({
        result: "success",
        message: "Meal deleted successfully"
      });
    });
  } catch (error) {
    console.error('Error deleting meal:', error);
    res.status(400).json({
      result: "failed",
      message: error.message
    });
  }
});




app.get("/calories/meals/:mealId/breakdown", (req, res) => {
  const mealId = req.params.mealId;

  db('meals')
    .select('id', 'name', 'datetime')
    .where('id', mealId)
    .then((mealInfo) => {
      if (mealInfo.length === 0) {
        return res.json({
          result: "failed",
          error: "Meal not found"
        });
      }

      const mealId = mealInfo[0].id;
      const mealName = mealInfo[0].name;
      const mealDatetime = mealInfo[0].datetime;

      db('meal_ingredients')
        .select(
          'food_items.label',
          'food_items.serving_size',
          'food_items.serving_unit',
          'food_groups.calories',
          'food_groups.carbohydrate',
          'food_groups.protien',
          'food_groups.fat'
        )
        .join('food_items', 'meal_ingredients.food_item_value', 'food_items.value')
        .join('food_groups', 'food_items.foodgroup', 'food_groups.value')
        .where('meal_ingredients.meal_id', mealId)
        .then((ingredients) => {
          if (ingredients.length !== 0) {
            const breakdown = ingredients.map((ingredient) => {
              let serving_size = parseFloat(ingredient.serving_size);
              serving_size = 1 / serving_size;

              const calories_per_serving = serving_size * ingredient.calories;
              const carbs_per_serving = serving_size * ingredient.carbohydrate;
              const prots_per_serving = serving_size * ingredient.protien;
              const fats_per_serving = serving_size * ingredient.fat;

              return {
                name: ingredient.label,
                breakdown: {
                  grams: [
                    { name: 'Proteins', value: prots_per_serving },
                    { name: 'Carbohydrates', value: carbs_per_serving },
                    { name: 'Fats', value: fats_per_serving }
                  ],
                  calories: {
                    carbohydrates: carbs_per_serving * 4,
                    proteins: prots_per_serving * 4,
                    fats: fats_per_serving * 9,
                    total: (carbs_per_serving * 4) + (prots_per_serving * 4) + (fats_per_serving * 9)
                  }
                },
                serving_unit: ingredient.serving_unit
              };
            });

            res.json({
              result: "success",
              meal_id: mealId,
              meal_name: mealName,
              datetime: mealDatetime,
              breakdown: breakdown
            });
          } else {
            res.json({
              result: "success",
              meal_id: mealId,
              meal_name: mealName,
              datetime: mealDatetime,
              breakdown: []
            });
          }
        })
        .catch((err) => {
          console.error(err);
          res.status(400).json({
            result: "failed",
            error: "Error retrieving breakdown"
          });
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({
        result: "failed",
        error: "Error retrieving meal information"
      });
    });
});


app.get("/calories/user/:userId/meals/summary", (req, res) => {
  const userId = req.params.userId;

  db('meals')
    .select('id', 'name', 'datetime')
    .where('userid', userId)
    .then(async (meals) => {
      const mealBreakdowns = [];
      for (const meal of meals) {
        const mealId = meal.id;
        const mealName = meal.name;
        const mealDatetime = meal.datetime;

        const ingredients = await db('meal_ingredients')
          .select(
            'food_items.label',
            'food_items.serving_size',
            'food_items.serving_unit',
            'food_groups.calories',
            'food_groups.carbohydrate',
            'food_groups.protien',
            'food_groups.fat'
          )
          .join('food_items', 'meal_ingredients.food_item_value', 'food_items.value')
          .join('food_groups', 'food_items.foodgroup', 'food_groups.value')
          .where('meal_ingredients.meal_id', mealId);

        let totalCalories = 0;
        let totalNutrients = {
          Proteins: 0,
          Carbohydrates: 0,
          Fats: 0
        };

        ingredients.forEach((ingredient) => {
          let serving_size = parseFloat(ingredient.serving_size);
          serving_size = 1 / serving_size;

          const calories_per_serving = serving_size * ingredient.calories;
          const carbs_per_serving = serving_size * ingredient.carbohydrate;
          const prots_per_serving = serving_size * ingredient.protien;
          const fats_per_serving = serving_size * ingredient.fat;

          totalCalories += calories_per_serving;
          totalNutrients.Proteins += prots_per_serving;
          totalNutrients.Carbohydrates += carbs_per_serving;
          totalNutrients.Fats += fats_per_serving;
        });

        const mealBreakdown = {
          meal_id: mealId,
          meal_name: mealName,
          datetime: mealDatetime,
          breakdown: {
            grams: [
              { name: 'Proteins', value: totalNutrients.Proteins },
              { name: 'Carbohydrates', value: totalNutrients.Carbohydrates },
              { name: 'Fats', value: totalNutrients.Fats }
            ],
            calories: {
              carbohydrates: totalNutrients.Carbohydrates * 4,
              proteins: totalNutrients.Proteins * 4,
              fats: totalNutrients.Fats * 9,
              total: totalCalories
            }
          }
        };

        mealBreakdowns.push(mealBreakdown);
      }

      res.json({
        result: "success",
        meals: mealBreakdowns
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({
        result: "failed",
        error: "Error retrieving meal information"
      });
    });
});



app.get("/calories/user/:userId/meals/breakdown", (req, res) => {
  const userId = req.params.userId;

  db('meals')
    .select('id', 'name', 'datetime')
    .where('userid', userId)
    .then(async (meals) => {
      const mealBreakdowns = [];
      for (const meal of meals) {
        const mealId = meal.id;
        const mealName = meal.name;
        const mealDatetime = meal.datetime;

        const ingredients = await db('meal_ingredients')
          .select(
            'food_items.label',
            'food_items.serving_size',
            'food_items.serving_unit',
            'food_groups.calories',
            'food_groups.carbohydrate',
            'food_groups.protien',
            'food_groups.fat',
            'meal_ingredients.quantity'
          )
          .join('food_items', 'meal_ingredients.food_item_value', 'food_items.value')
          .join('food_groups', 'food_items.foodgroup', 'food_groups.value')
          .where('meal_ingredients.meal_id', mealId);

        let totalCalories = 0;
        let totalNutrients = {
          Proteins: 0,
          Carbohydrates: 0,
          Fats: 0
        };

        const foodItems = ingredients.map((ingredient) => {
          let serving_size = parseFloat(ingredient.serving_size);
          serving_size = 1 / serving_size;

          let quantity = ingredient.quantity != undefined && ingredient.quantity != null ? parseFloat(ingredient.quantity) : 1;
          const calories_per_serving = (serving_size * ingredient.calories) * quantity;
          const carbs_per_serving = (serving_size * ingredient.carbohydrate) * quantity;
          const prots_per_serving = (serving_size * ingredient.protien) * quantity;
          const fats_per_serving = (serving_size * ingredient.fat) * quantity;

          totalCalories += calories_per_serving;
          totalNutrients.Proteins += prots_per_serving;
          totalNutrients.Carbohydrates += carbs_per_serving;
          totalNutrients.Fats += fats_per_serving;

          return {
            name: ingredient.label,
            breakdown: {
              grams: [
                { name: 'Proteins', value: prots_per_serving },
                { name: 'Carbohydrates', value: carbs_per_serving },
                { name: 'Fats', value: fats_per_serving }
              ],
              calories: {
                carbohydrates: carbs_per_serving * 4,
                proteins: prots_per_serving * 4,
                fats: fats_per_serving * 9,
                total: calories_per_serving
              }
            },
            serving_unit: ingredient.serving_unit,
            quantity: quantity.toString()
          };
        });

        const gramsBreakdown = [
          { name: 'Proteins', value: totalNutrients.Proteins },
          { name: 'Carbohydrates', value: totalNutrients.Carbohydrates },
          { name: 'Fats', value: totalNutrients.Fats }
        ];

        const caloriesBreakdown = {
          carbohydrates: totalNutrients.Carbohydrates * 4,
          proteins: totalNutrients.Proteins * 4,
          fats: totalNutrients.Fats * 9,
          total: totalCalories
        };

        const mealBreakdown = {
          meal_id: mealId,
          meal_name: mealName,
          datetime: mealDatetime,
          food_items: foodItems,
          breakdown: {
            grams: gramsBreakdown,
            calories: caloriesBreakdown
          }
        };

        mealBreakdowns.push(mealBreakdown);
      }

      res.json({
        result: "success",
        meals: mealBreakdowns
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({
        result: "failed",
        error: "Error retrieving meal information"
      });
    });
});







app.listen(PORT, () => {
    console.log("App is running on port ", PORT);
})