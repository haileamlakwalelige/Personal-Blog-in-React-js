import React from 'react'
import "./register.css";
// import image from '../images/profile.jpg';
import one from '../images/wide.jpg';

import {Link } from 'react-router-dom'

const Register = ({setUser}) => {
  return (
    <>
    <section className="register">
      <div className="recontainer">
        <div className="reseparate">
          <div className="div-first">
          <img src={one} alt="" />
          </div>
          <div className="div-second">
          <h1>Create Account</h1>
          <div className="reforms">
            <label>UserName</label>
            <input type="text" />
            <label>UserName</label>
            <input type="text" />
            <label>UserName</label>
            <input type="text" />
            <label>UserName</label>
            <input type="text" />
            <button className="buto" style={{color:'green'}} onClick={()=>setUser(true)}><Link to="/" style={{color:'green'}}>Register</Link></button>
          </div>
          <p>Do you have an account <Link to="/login" className="logi">Login</Link></p>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Register;
