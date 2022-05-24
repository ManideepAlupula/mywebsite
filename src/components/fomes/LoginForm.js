import React from "react";
import img from "../simplecomponents/logincom"

// const Login = () =>{
//     return(
//      < components = {img}/>
//     )
// }

// export default Login;




















  const LoginForm = () => {
    return (
      <div className="loginform">
        <form action="">
          <div className="form-container">
            <div className="email">
              <label htmlFor="email"><b className = "Emailtxt">Email</b></label>
              <input className="textarea" type="text" name="email" id="email" />
            </div>
            <div className = "password">
              <label htmlFor="password"><b className = "txtpw">Password</b></label>
              <input className="textareapw" type="password" name="password" id="password" />
            </div>              
                      <input className = "Btn-login" id="login-button" type="submit" name="Login" value="Login"></input>

          </div>
        </form>
      </div>
    );
  };

  export default LoginForm;
