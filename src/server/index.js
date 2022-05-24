const express = require('express');
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const saltRounds = 10
import { Routes ,Route } from 'react-router-dom';


const app = express();

app.use(express.json());


const db = mysql.createConnection({
   host: "localhost",
  user: "new_project",
  password: "Password@123"
});
 

app.post("/Signup",(req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    const conformpassword = req.body.conformpassword;

    db.query(
        "INSERT INTO sample_project (email,password.conformpassword) VALUES (?,?)",
        [email,password,conformpassword],
        (err,result) => {
            console.log(err);
        }
    );
});

app.listen(3001,()=>{
    console.log("server runnining on port");
});