import React,{useState} from 'react'
import profile from '../images/profile.jpg'
import {Link} from 'react-router-dom';
import {RiImageAddLine} from 'react-icons/ri';
import {IoSettingsOutline} from 'react-icons/io5';
import {BsBagCheck} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import {GrHelp} from "react-icons/gr";
import {BiLogOut} from 'react-icons/bi';


const User = ({user, setUser}) => {

    // const user=true;
    const [profileOpen, setProfileOpen] =useState(false);
    const close=()=>{
        setProfileOpen(false);
    }

  return (
    <>
      <div className="profile">
      {user ? (
        <>
        <button className="img" onClick={()=>setProfileOpen(!profileOpen)}>
            <img src={profile} alt="profile" />
        </button>
      
         {profileOpen && (
        <div className="openProfile boxItems" onClick={close}>
            <Link to="/account">
                <div className="image" >
                    <div className='img'>
                    <img src={profile} alt="profile" />
                    </div>
                    <div className="text">
                        <h4>Haileamlak Waleligne</h4>
                        <p>Addis Ababa, AA</p>
                    </div>
                </div>
            </Link>
            <Link to="/register">
                <button className="box">
                    <RiImageAddLine  className="icon" />
                    <h4>Create Post</h4>
                </button>
            </Link>
            <button className="box">
                    <IoSettingsOutline   className="icon"/>
                    <h4>My Account</h4>
                </button>
                <button className="box">
                    <BsBagCheck  className="icon"/>
                    <h4>My Order</h4>
                </button>
                <button className="box">
                    <AiOutlineHeart className="icon" />
                    <h4>Wishlist</h4>
                </button>
                <button className="box">
                    <GrHelp className="icon" />
                    <h4>Help</h4>
                </button>
                <button className="box">
                    <BiLogOut className="icon" />
                    <h4 onClick={()=>setUser(false)}><Link to="/login" style={{color:'red'}}>Log Out</Link></h4>
                </button>
        </div>
        )}
        </>
      
        ):(
            <Link to="/login">
            <button >My account</button>
            </Link>
        )}
      </div>
    </>
  )
}

export default User
