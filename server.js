const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001 ;

const app = express();

app.use(bodyParser.json());

app.use(cors());

const db = require('knex')({
    client: 'pg',
    version: '16.2',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'nutri',
      password : 'dwryhs478',
      database : 'nutridb'
    }
  });
  

app.post("/register", (req, res) => {
   const {username, password} = req.body;
   db('users')
    .returning('*')
    .insert({
        username: username,
        password: password
    })
    .then(response => {
        res.json(response);
    })
    .catch(err => res.status(400).json(err));  
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