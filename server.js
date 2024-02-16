const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const db = require('knex')({
    client: 'pg',
    version: '16.2',
    connection: {
      host : '127.0.0.1',
      port : 3002,
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

app.get("/login", (req, res) => {
  const {username, password} = req.body;
  db('users')
    .where({
      username: username,
      password:  password
    }).select('id')
    .then(response => {
      res.json(response);
  })
  .catch(err => res.status(400).json(err));  
});

app.listen(3001, () => {
    console.log("app is running on port 3001");
})