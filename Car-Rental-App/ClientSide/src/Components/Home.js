import React, { useState } from 'react'
import UserLogin from '../User/UserLogin'
import UserSign from '../User/UserSign'
import AdminLogin from '../Admin/AdminLogin';
import './../Components/Style/Home.css'
import Navigation from './Navigation';

function Home() {
  const [FormType, setFormType]  = useState(<UserLogin/>);
  function usersignup(){
    setFormType(<UserSign/>) 
  };

  function userlogin(){
    setFormType(<UserLogin/>) 
  };

  function Adminlogin(){
    setFormType(<AdminLogin/>) 
  };


  return (
    <>
    <Navigation/>
      <div className='Home-page'>  
        <div className='Register'>
          <div className='user'>
            <div></div>
            <div className="button-user-admin-login-containecr">
            <button className="button-30" onClick={userlogin}> User Login </button>
            <button className="button-40" onClick={usersignup}> User Sign Up</button>
            </div>
            
          </div>
          <div className='Admin'>
           
            <div className="button-user-admin-login-containecr">
            <button className="button-50 " onClick={Adminlogin}>Admin login</button>
           
            </div>
          </div>
        </div>   
        <div className='form-type'>
          {FormType}
        </div>
      </div>     
    </>
  )
}


export default Home