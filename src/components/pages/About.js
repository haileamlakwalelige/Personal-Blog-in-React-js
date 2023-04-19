/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css';
import profile from '../images/profile.jpg';

const About = () => {
  return (
    <>
      <section className="about">
      <div className="about-cont">
        <div className='pro'>
        <img src={profile} alt="profile picture" />
        </div>
        <div className="data">
        <h2>Haileamlak Waleligne</h2>
        <p>When I started my journey at university, I initially felt a sense of dread. Having heard stories about college students struggling to find work afterwards, and not having any dream for myself, I had decided that university was probably not the best route for me. However, despite my protests my family refused to accept my decision and encouraged me to pursue higher education and enrolled me in AAU. 
        At first, I lacked direction in the choices I made. Uninspired and uncertain of where I should go or which path was best for me, my grades suffered as a result. With no clear goal in sight and no determination in achieving success, it seemed as though everything was for naught. 
        It wasn't until later that I truly realized what potential exists within me and how far I could go with dedication and hard work. Once this realization dawned on me and with it an understanding of what I wanted from life, all areas of academia suddenly opened up to me like never before. My grades began steadily improving as each new challenge pushed me further along towards completing my degree - something which felt closer to an accomplishment than ever before.
        I wish I could tell every young person who begins their university life without knowing their desired future - it's important to not give up until you find out what excites you most! Only by recognizing our passions can we make a purpose-driven plan that will ensure our success along our chosen pathways in life.,
        </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About;
