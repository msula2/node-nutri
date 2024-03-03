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

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000"
  })
);


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
    maxAge: 600000
  }
}));

const checkSignIn = (req, res, next) => {
  console.log(req.session);
  if(req.session.user){
    console.log("User is on the session");
    next();    
  } else {
    console.log("User is not on the session");
    return res.status(401).json({
      result: "failed",
      error: "Unauthorized"
    })
  }
}

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
  if(!req.session.user){
    console.log("logged out")
    res.json({
      result: "logged out"
    })
  } else{
    console.log("logged in")
    res.json({
      result: "logged in",
      data: req.session.user
    })
  }
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
        req.session.user = response[0];
        console.log(req.session);
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