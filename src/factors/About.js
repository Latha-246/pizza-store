import React from 'react';
import './customstyles.css'; 
import './extra.css';
const About = () => {
  return (
   
    <div className="about-container">
      <section className="introduction">
        <p className='infra'>Welcome to Delicious Pizza</p>
        <p className='infra2'><article>
        Delicious Pizza was founded in 2016 with a passion for creating the best pizza in town.
          Our unique recipes and high-quality ingredients set us apart.</article>
        </p>
       
      </section>

      <section className="mission-values">

        <h2 className='infra3'>Our Mission and Values</h2>
       
        <p className='info'>Our mission is to provide delicious, high-quality pizza with exceptional customer service.</p>
        <div className="infosys">
        <ul>
          <li>Quality Ingredients</li>
          <li>Excellent Customer Service</li>
          <li>Community Involvement</li>
        </ul>
        </div>
       
      </section>
      

      <section className="team">
      <h2 className='text'>Our Story</h2>
        <div className="team-member">
    <div className="text-content">
   
    
    <p>The story of India's fastest growing pizza place started back in 2016 when Sonu sood opened his very first pizzeria in his hometown Chandigarh. 
      Inspired by his own search for delicious pizza options, he started to wonder if there was a better way of doing pizza – and business.
       The last thing the world needed was another pizzeria, but maybe this one could be different and everyone could get exactly what they wanted, made fresh on demand. 
       It all started sounding pretty great, and sonu sood was opening the first Delicious pizza  in his hometown.</p>
    </div>
          <img src="https://th.bing.com/th/id/OIP.Y_n_uKgs9K_LRPHd-f5hTwAAAA?rs=1&pid=ImgDetMain" alt="Owner" />
         
        </div>
        
      </section>

     

      <section className="gallery">
        <h2>Deals and Offers</h2>
        <div className="gallery-images">
          <img src="https://lapinozpizza.in/assets/wla_new/lapinoz/img/deals-banner.jpg" alt="Pizza" />
          <img src="https://lapinozpizza.in/assets/wla_new/lapinoz/img/deals-banner-two.jpg" alt="Store" />
          <img src="https://lapinozpizza.in/assets/wla_new/lapinoz/img/deals-banner-five.jpg" alt="Pizza" />
          
        </div>
      </section>

      
    </div>
    
  );
};

export default About;
