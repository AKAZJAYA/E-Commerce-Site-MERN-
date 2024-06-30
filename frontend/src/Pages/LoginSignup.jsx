import React from "react";
import './CSS/LoginSignUp.css';

const LoginSignup = () =>{

    return(

        <div className="loginsignup">

            <div className="loginsignup_container">
                <h1>Sign Up</h1>
                <div className="loginsignup_fileds">
                    <input type="text" placeholder="Yore Name" />
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button>Continue</button>
                <p className="logingsignup_login">Already have an account? <span>Login here</span></p>
                <div className="loginsignup_agree">
                    <input type="checkbox" name='' id=''/>
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;