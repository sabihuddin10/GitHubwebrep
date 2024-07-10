import React from 'react';
import './LoginSignup.css';

export default function LoginSignup() {
  const [loginboxon, setLoginboxOn] = React.useState(true);
  const [signupboxon, setSignupboxOn] = React.useState(false);

  const[signup_email,setsignup_email] = React.useState("");
  const[signup_password,setsignup_password] = React.useState("");
  const[signup_name,setsignup_name] = React.useState("");

  const[login_email,setlogin_email] = React.useState("");
  const[login_password,setlogin_password] = React.useState("");
  const[login_name,setlogin_name] = React.useState("");


  const handleLogin = (event) => {
    event.preventDefault();
    let obj1 = {
      name: login_name,
      email: login_email,
      password: login_password,
    }
    console.log("login attempt ", obj1);

    alert("signup attempt "+ obj1.name);
  }
  const handlesignup = (event) => {
    event.preventDefault();
    let obj2 = {
      name: signup_name,
      email: signup_email,
      password: signup_password,
    }
    console.log("signup attempt ", obj2);
    alert("signup attempt "+ obj2.name);
  }


  const toggleSignupLogin = (event) => {
    event.preventDefault();
    setLoginboxOn(!loginboxon);
    setSignupboxOn(!signupboxon);
  };

  return (
    <div className="login-signup-container">
      {loginboxon && (
        <form action="loginform">
          <div className="login-container">
            <h2>User Login</h2>
            <input className="inputclass" type="text" placeholder="Name" required onChange={(e)=>setlogin_name(e.target.value)}/>
            <input className="inputclass" type="email" placeholder="Email" required onChange={(e)=>setlogin_email(e.target.value)}/>
            <input className="inputclass" type="password" placeholder="Password" required onChange={(e)=>setlogin_password(e.target.value)}/>
            <input className="logsign-mainbtns" type="submit" value="Login" name="submit-login" id="submit-login" onClick={handleLogin}/>
          </div>
        </form>
      )}

      {signupboxon && (
        <form action="signupform">
          <div className="signup-container">
            <h2>User Signup</h2>
            <input className="inputclass" type="text" placeholder="Name" required onChange={(e)=>setsignup_name(e.target.value)}/>
            <input className="inputclass" type="email" placeholder="Email" required onChange={(e)=>setsignup_email(e.target.value)} />
            <input className="inputclass" type="password" placeholder="Password" required onChange={(e)=>setsignup_password(e.target.value)}/>
            <input className="logsign-mainbtns" type="submit" value="Signup" name="submit-signup" id="submit-signup" onClick={handlesignup}/>
          </div>
        </form>
      )}
      <div className="toggleforms-container">
        <input
          className="logsign-switchbtns"
          type="button"
          value={loginboxon ? "Sign Up Instead" : "Login Instead"}
          onClick={toggleSignupLogin}
        />
      </div>
    </div>
  );
}
