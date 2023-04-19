import React from 'react'
import logo from '../images/logo.png';
import {nav} from "../assets/data";
import {Link} from 'react-router-dom';
import User from './User';
import "./header.css";

const Header = ({user, setUser}) => {


    window.addEventListener("scroll", function(){
        const header = this.document.querySelector(".header")
        header.classList.toggle("active",this.window.scrollY>1100)
    })
 
  return (
    <>
      <header className="header">
        <div className="scontainer flex">
            <div className="logo">
                <img src={logo} alt="logo" width="100px" /> 
            </div>
            <nav>
                <ul>{nav.map(link =>(
                    <li key={link.id}>
                        <Link to={link.url}>{link.text}</Link>
                    </li>
                ))}</ul>
            </nav>
            <div className="account flexContainer">
                <User user={user} setUser={setUser}/>
            </div>
        </div>
      </header>
      <section></section>
    </>
  )
}

export default Header;
