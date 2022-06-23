
import { react,useState } from "react";
import Home from "./Home";
// import Signup from "./SignUp";
import "@firebase/auth";
import "firebase/auth"

import {getAuth,createUserWithEmailAndPassword}
     from "firebase/auth";
import "../../App.css";
import "./login.css"
import {firebase,ss} from "../../Firebase";
import { Link ,useHistory} from "react-router-dom";
require("firebase/auth");


// const auth=firebase.getAuth();

function Signup() {
  const history=useHistory();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");
  const [hasAccount, sethasAccount] = useState(false);

  const [user, setUser] = useState({});

  ss.onAuthStateChanged(ss, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await ss.createUserWithEmailAndPassword(
       
        Email,
        Password
      );
      console.log(user);
      history.push('/home');
    } catch (error) {
      console.log(error.message);
    }
  };

  // const login = async () => {
  //   try {
  //     const user = await ss.signInWithEmailAndPassword(
       
  //       Email,
  //       Password
  //     );
  //     console.log(user);
  //     history.push('/home');

  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

   const logout = async () => {
    await ss.signOut(ss);
  };
  function signup(){
    return(
      <div className="login">
        <div className="loginContainer">
        <h3 className="ltext"> Sign up </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        {/* <button className="btnContainer" onClick={login}>
          Login
          </button>
      </div>
       {/* {user?(<Home logout={logout}/>):(<Signup/>)} */}
      {/* <h4> User Logged In: </h4>
      {user?.email} */}

      {/* <button onClick={logout}>
      <Link to='/home'> Sign Out </Link>
    </button> */}
    <div className="btnContainer">
  {/* {!hasAccount ?(
    <><button onClick={login}>Sign In</button>
    <p>Dont have an account?<span onClick={signup}>Sign Up</span></p>
    </>
  ):( */}
    <><button onClick={register}>Sign Up</button>
    <p> have an account?<span onClick={()=>sethasAccount=(!hasAccount)}>Sign In</span></p>
    </>
  
</div> */</div>
      </div>
    
  

    );

  }
  

  return (
   
      
      
      <div className="login">
        <div className="loginContainer">
        <h3 className="ltext"> Sign Up </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        
       {/* {user?(<Home logout={logout}/>):(<Signup/>)} */}
      {/* <h4> User Logged In: </h4>
      {user?.email} */}

      {/* <button onClick={logout}>
      
    </button> */}
    <div className="btnContainer">
  
    {/* <><button onClick={login}>Sign In</button>
    <p>Dont have an account?<span onClick={signup}>Sign Up</span></p>
    </> */}
  
    <><button onClick={register}>Sign Up</button>
    <p> have an account?<span><Link to='/login'>Sign In</Link></span></p>
    </>
  
</div> */</div>
      </div>
    
  );
}


export default Signup;
