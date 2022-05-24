import React, { useState } from "react";
import "../../App.css";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

var mysql = require('mysql');




 var con = mysql.createConnection({
  host: "localhost",
  user: "new_project",
  password: "Password@123"
});



function SignupForm(props) {
  const emailEL = React.useRef(null);
  const passwordEL = React.useRef(null);
  const ConformPasswordEL = React.useRef(null);



  const handleSubmit = (e) => {
    e.preventDefault(); 
    const formData = {
      email: emailEL.current.value,
      password: passwordEL.current.value,
      ConformPassword: ConformPasswordEL.current.value,
    };
    console.log("formdata",formData);
  };
  toast.configure();

  const notify = () => {
    toast("signup ok");
  };


axios.post('/Signup',(req,res)=>{
    let body={
        email:req.body.email,
        password:req.body.password,
        ConformPassword:req.body.ConformPassword,
    }

    console.log('body',body)
    let query = "INSERT INTO `sample_project` SET ?"
    
    con.query(query,body,(err,rows)=>{
        console.log("query",query)
        if(!err){
            res.send(rows)
        }
        else{
            res.send(err)
        }
    })
})

  // function onSubmitLogin(values, { setSubmitting }) {
  // const { email, password,ConformPassword } = values;
  // console.log("valuess", values)

  // let data = {
  //   "email":  values.email,
  //   "password":values.password,
  //   "ConformPassword":values.ConformPassword,

  // }

  // const [values, setValues]= useState({
  //     email:"",
  //     password:"",
  //     ConformPassword:""
  // });

  // const handleChange = (event) => {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   });
  // }
  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  // };

  // const handleInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name,value);

  //   setUserRegistration({...userRegistration, email: "testing"});

  // }

  // function app() {
  //   const {register, handlesubmit, errors } = useForm();
  //   const [userInfo, setUserInfo] = useState();
  //   const onsubmit = (data) => {
  //     setUserInfo(data);
  //     console.log(data)
  //   }

  return (
    <div className="signupform">
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="email">
            <h3 className="head-signup">Signup</h3>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              className="textbox"
              type="email"
              name="email"
              placeholder="email"
              onSubmit={(e)=>{
                emailEL(e.target.value)
              }}
            />
          </div>
          <div className="password">
            <label htmlFor="password">
              <b className="txtpw">Password</b>
            </label>
            <input
              className="textbox"
              type="password"
              name="password"
              placeholder="password"
              onSubmit={(e)=>{
                passwordEL(e.target.value)
              }}
            />
          </div>
          <div className="ConformPassword">
            <label htmlFor="ConformPassword">
              <b className="txtcp">C/Password</b>
            </label>
            <input
              className="textbox"
              type="ConformPassword"
              name="ConformPassword"
              placeholder="ConformPassword"
                onSubmit={(e)=>{
                  ConformPasswordEL(e.target.value)
                  
                }
                
                }
            />
          </div>
          <input
            className="Btn-signup"
            id="signup-button"
            type="submit"
            name="signup"
            onClick={(handleSubmit)}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
