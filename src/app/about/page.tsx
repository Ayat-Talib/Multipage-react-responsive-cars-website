import React from 'react'

const About = () => {
  return (
    <div>
      <section className='about' style={{backgroundImage: "url(car_about.jpg)"}}>
        <div className='about-content'>
        <h2 style={{textAlign:'center'}}>About Us</h2>
        <p>


Welcome to <strong>Cars World</strong>, your ultimate destination for top-quality automobiles. Whether you're in the market for a brand-new luxury vehicle, a reliable family car, or a pre-owned gem, we have the perfect ride to suit your needs.</p>


<h3 style={{color:'#ff3e00',marginTop:'30px'}}>Our Commitment to Excellence</h3> 

<p>At Cars World Store, we are dedicated to providing you with the highest standard of customer service. Our knowledgeable staff is here to assist you every step of the way, from browsing our extensive inventory to securing financing options that work for you.
</p>

<div style={{color:"#fff", fontStyle:'italic', textAlign:'center',padding:'20px'}}>Explore Our Inventory</div>

<ul>
    <li>
   <strong> New Cars:</strong> Discover the latest models from leading manufacturers, complete with cutting-edge technology and superior performance.
    </li>
    <li>
    <strong>Certified Pre-Owned:</strong> Our certified pre-owned vehicles undergo rigorous inspections to ensure they meet our strict quality standards.
    </li>
    <li>
    <strong>Used Cars:</strong> Browse our selection of reliable used cars, all at competitive prices.
    </li>
</ul>

<div style={{color:"fff", fontStyle:'italic', textAlign:'center',padding:'20px'}}>Why Choose Us?</div>

<ul>
    <li>
    <strong>Expert Staff:</strong> Our team of car enthusiasts is passionate about helping you find the perfect vehicle.
    </li>
    <li>
   <strong>Financing Options:</strong> We offer flexible financing solutions tailored to your budget.
    </li>
    <li>
    <strong>Service and Maintenance:</strong> Keep your car running smoothly with our professional maintenance and repair services.
    </li>  
</ul>


</div>
</section>
</div>
  );
   }

export default About
