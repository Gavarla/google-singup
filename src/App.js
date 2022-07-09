import React, {useState} from "react";
import "./style.css";
import { GoogleLogin } from 'react-google-login';

import { GoogleLogout } from 'react-google-login';




export default function App() {
  const [buttonLogin, setButtonLogin]=useState(true)
  const [buttonLogout, setButtonLogout]=useState(false)

  const responseGoogle=(res)=>{
    console.log(res)
    setButtonLogin(false)

  }

  const logout=(res)=>{
console.log(res)
  }

  return (
    <div>
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
         onSuccess={responseGoogle}
       />

    <GoogleLogout
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    
      onLogoutSuccess={logout}
   />
    
    </div>
  );
}
