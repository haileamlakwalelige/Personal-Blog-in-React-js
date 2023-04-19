/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./login.css";
import image from '../images/profile.jpg';
import {Link } from 'react-router-dom'

const Login = ({setUser}) => {
  return (
    <>
    <section className="login">
      <div className="locontainer">
        <div className="separate">
          <div className="first-div">
          <img src={image} alt="profile image" />
          </div>
          <div className="second-div">
          <h1>Account Info</h1>
          <div className="forms">
            <label >Username</label>
            <input type='text' />
            <label >Password</label>
            <input type='password' />
            <button className="but" onClick={()=>setUser(true)}><Link to="/" style={{color:'green'}}>Login</Link></button>
          </div>
          <p>You don't have account <Link to="/register">Register</Link></p>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Login
