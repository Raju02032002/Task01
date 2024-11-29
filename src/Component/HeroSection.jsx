import React from 'react';
import './HeroSection.css';
import img3 from './Images/banner.png'
import cpimg1 from './Images/Screenshot_2024-11-29_132002-removebg-preview.png';
import cpimg2 from './Images/Screenshot_2024-11-29_132742-removebg-preview (1).png';
import cpimg3 from './Images/Screenshot_2024-11-29_132755-removebg-preview.png';
import cpimg4 from './Images/Screenshot_2024-11-29_132814-removebg-preview.png';
import cpimg5 from './Images/Screenshot_2024-11-29_132742-removebg-preview (1).png';
import cpimg6 from './Images/Screenshot_2024-11-29_132855-removebg-preview.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="new-feature">
        <span>New feature</span>
        <a href="#dashboard">Check out the team dashboard →</a>
      </div>
      <h1 className="hero-title">Beautiful analytics to grow smarter</h1>
      <p className="hero-description">
        Powerful, self-serve product and growth analytics to help you convert, engage,  <br></br> and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="hero-buttons">
        <button className="btn btn-demo">Demo</button>
        <button className="btn btn-signup">Sign up</button>
      </div>
      <div className='header'>
          <img src={img3} alt="" height="500px" width="100%"/>
      </div>

      <div className='text'>
            <h4>join 4,000+ Companies already growing</h4>
        </div>
        <div className='compimg'>
             <img src={cpimg1} alt="" height="48px"/><h3>Boltshift</h3> 
             <img src={cpimg2} height="44px"/><h3>Lightbox</h3>
             <img src={cpimg3} height="44px"/><h3>FeatherDev</h3>
             <img src={cpimg4} height="44px"/><h3>Spherule</h3>
             <img src={cpimg5} height="44px"/><h3>GlobalBank</h3>
             <img src={cpimg6} height="44px"/><h3>Nietzsche</h3>
        </div>
    </section>
  );
};

export default HeroSection;
