import React, { useState } from "react";
import './CSS/LoginSignUp.css';

const LoginSignup = () =>{

    const [state,setState] = useState("Login");
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:""
    })

    const changeHandler = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
 
    const login = async ()=>{
        console.log("Login function ex",formData);

        let responseData;
        await fetch('http://localhost:4000/login',{
            method:'post',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(formData),
        }).then((res)=>res.json()).then((data)=>responseData=data);

        if (responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors)
        }
    }

    const signup = async ()=>{
        console.log("Sign up function ex",formData);
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method:'post',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(formData),
        }).then((res)=>res.json()).then((data)=>responseData=data);

        if (responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors)
        }
    }

    return(

        <div className="loginsignup">

            <div className="loginsignup_container">
                <h1>{state}</h1>
                <div className="loginsignup_fileds">
                    {state==="Sign Up"?<input name="name" value={formData.name} onChange={changeHandler} type="text" placeholder="Yore Name" />:<></>}
                    <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address"/>
                    <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password"/>
                </div>
                {state==="Sign Up"?<button onClick={()=>{signup()}}>Continue</button>:<button onClick={()=>{login()}}>Login</button>}
                {state==="Sign Up"?<p className="logingsignup_login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
                :<p className="logingsignup_login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
                
                <div className="loginsignup_agree">
                    <input type="checkbox" name='' id=''/>
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;