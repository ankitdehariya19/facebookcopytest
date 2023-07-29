import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
         <div className='logingwrapper'>
               <div className='loginLeft'>
                    <h3 className='loginLogo'>Lamasocial</h3>
                    <span className='loginDesc'>
                        Connect with Friends and World Around You on Lamasocial.{""}
                    </span>
               </div>
               <div className='loginRight'>
                      <div className='loginBox'>
                           <input  placeholder='Email' className='loginInput' ></input>
                           <input  placeholder='Password' className='loginInput' ></input>
                           <button className='loginButton'>Login</button>
                           <span className='loginForgot'>Forgot Password?</span>
                           <button className='loginRegisterButton' > <Link >  Create a new Accout</Link> </button>
                      </div> 
               </div>
         </div>
    </div>
  )
}
