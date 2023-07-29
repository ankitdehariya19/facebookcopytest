import React from 'react'
import './register.css'

export default function Register() {
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
                           <input  placeholder='Username' className='loginInput' ></input>
                           <input  placeholder='Email' className='loginInput' ></input>
                           <input  placeholder='Email' className='loginInput' ></input>
                           <input  placeholder='confirm Password' className='loginInput' ></input>
                           <button className='loginButton'>Sign Up</button>
                         
                           <button className='loginRegisterButton'> Log into Accout </button>
                      </div> 
               </div>
         </div>
    </div>
  )
}
