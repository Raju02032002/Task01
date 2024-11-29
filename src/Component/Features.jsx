import React from 'react';
import './Features.css'; 
import img1 from './Images/Icon.png';
import img2 from './Images/Icon (1).png';
import img3 from './Images/chart-breakout-square.png';
import img4 from './Images/message-smile-circle (1).png';
import img5 from './Images/Icon (3).png';
import img6 from './Images/Icon (2).png';
import loo from './Images/Screenshot_2024-11-29_151057-removebg-preview (2).png'
import lll from './Images/Screenshot_2024-11-29_152407-removebg-preview.png';

import phone from './Images/Container.png';
import kkk from './Images/Icon wrap.png';

import yyy from './Images/plus-circle.png';
import aaa from './Images/Avatar group.png'

const Features = () => {
  return (
    <section className="features">
      <h2 id='tt'>Features</h2>
      <p id="pp">Analytics that feels like it’s from the future. Trusted by over 4,000 startups.</p>
      <br />
      <p id="p1">Powerful, self-serve product and growth analytics to help you convert, engage,<br></br> and retain more users. Trusted by over 4,000 startups.</p>
      <div className="feature-cards">
        <div className="feature-card no-border">
            <div id="img">
            <img src={img1}   />
            </div>
            
          <h4 id="t1">Share team inboxes</h4>
          <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
        </div>
        <div className="feature-card no-border">
            <div id="img">
            <img src={img2}/>
            </div>
            
          <h4 id="t2">Deliver instant answers</h4>
          <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
        </div>
        <div className="feature-card no-border">
            <div id="img">
            <img src={img3}/>
            </div>
            
          <h4 id="t3">Manage your team with reports</h4>
          <p>Measure what matters with easy-to-use reports. Filter, export, and drill down on the data in a couple clicks.</p>
        </div>
        <div className="feature-card">
            <div id="img">
            <img src={img4}/>
            </div>
           
          <h4 id="t4">Connect with customers</h4>
          <p>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email.</p>
        </div>
        <div className="feature-card">
            <div id="img">
            <img src={img5} alt="" />
            </div>
           
          <h4 id="t5">Connect the tools you already use</h4>
          <p>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, extensive developer tools.</p>
        </div>
        <div className="feature-card">
            <div id="img">
            <img src={img6}/>
            </div>
            
          <h4 id="t6">Our people make the difference</h4>
          <p>We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
        </div>
      </div>

      <div className="background">
              <img src={loo} alt="" />
      </div>
      <h2 id='ii'>We’ve been using Untitled to kick start every new project and can’t imagine working without it.</h2>
      <div>
        <img src={lll}/>
      </div>
   <br />
      <div className='features'>
        <button>Features</button>
        <h3>Cutting-edge features for advanced analytics</h3>
        <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
      </div>
      
      <div className='lll'>
      <img src={phone} width="100%"/>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <div className="frequ">
           <h3>Frequently asked questions</h3>
           <p>Everything you need to know about the product and billing.</p>
      </div> */}
      <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <p>Everything you need to know about the product and billing.</p>

      <div className="faq-item">
        <h3>Is there a free trial available?</h3>
        <p id="ppp">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free,<br /> personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
        
      </div>

      <div className="faq-item">
        <br />
        <h3>Can I change my plan later?  <img id='iii' src={kkk}/></h3>
        <br />
      </div>

      <div className="faq-item">
        <br />
        <h3>What is your cancellation policy?  <img id='iii' src={yyy} alt="" /></h3>
        <br />
      </div>

      <div className="faq-item">
        <br />
        <h3>Can other info be added to an invoice? <img id='iii' src={yyy} alt="" /></h3>
        <br />
      </div>

      <div className="faq-item">
        <br />
        <h3>How does billing work? <img id='iii' src={yyy} alt="" /></h3>
      <br />
      </div>

      <div className="faq-item">
        <br />
        <h3>How do I change my account email? <img id='iii' src={yyy} alt="" /></h3>
       <br />
      </div>
    </div>
    <br />
    <br /><br />
    <div id="ipo">
        <img src={aaa} alt="" /> 
        <p>Still have questions?</p>
        <p id="ss">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
          <button id="bt">Get in touch</button>
    </div>
    <br /><br /><br />
    
    
    </section>
  );
};

export default Features;
