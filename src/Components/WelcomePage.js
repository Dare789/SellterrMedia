import React from 'react';
import Header from './WelcomePage/Header/Header';
import Landing from './WelcomePage/Landing/Landing';
import About from './WelcomePage/About/About';
import Reviews from "./WelcomePage/Reviews/Reviews.js"
import Faq from './WelcomePage/Faq/Faq';
import Footer from './WelcomePage/Footer/Footer';

const WelcomePage = () => {
  return (
    <div className='sticky'>
      <div className='absolute'>
        <Header/> 
        <Landing/>
        <About/>
        <Reviews /> 
        <Faq/>
        <Footer/> 
      </div>
    </div>
  )
}

export default WelcomePage;