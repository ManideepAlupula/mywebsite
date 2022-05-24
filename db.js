const mysql = require('mysql');
const express = require('express');
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json())

// var mySqlConnection = mysql.createConnection({
//     host: "localhost",
//     user: 'new_project',
//     password: "PassWord@123",
//     database: "newwebsite",
//     port: "3306"
// })

var con = mysql.createConnection({
  host: "localhost",
  user: "new_project",
  password: "Password@123",
  database:"newwebsite"
});

    con.connect(function(err)
    {
      if(err)throw err;
    var sql = "INSERT INTO sample_project (email, password, conformpassword) VALUES ('him@gmail.com','12345', '12345')";

     con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);

    })
  })


  
  
 
  
    // Creating queries
    // db_con.query(query, [userName, 
    // userAddress], (err, rows) => {
    //     if (err) throw err;
    //     console.log("Row inserted with id = "
    //         + rows.insertId);
    // });

    





app.listen(5009,function(){
  console.log("server is running port 4000")
  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  

  })
})
