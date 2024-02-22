const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001 ;

const app = express();

app.use(bodyParser.json());

app.use(cors());

const db = require('knex')({
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
        res.json({
          result: "success", 
          data: response[0]
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

app.listen(PORT, () => {
    console.log("App is running on port ", PORT);
})