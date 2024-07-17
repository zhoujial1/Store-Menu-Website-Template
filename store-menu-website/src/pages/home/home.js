import React from 'react';
import './home.css';

function Home () {
  return (
    <div className='Home'>
      <div className='Section1'>
        <h1>About us</h1>
        <div className='About'>
          <p>
            Welcome to our store! We are a family-owned business that has been serving our community for over 20 years. Our store offers a wide variety of products, including fresh produce, meat, dairy, and more. We take pride in providing our customers with high-quality products at affordable prices. Our friendly staff is always ready to help you find what you need. We look forward to seeing you soon!
          </p>
          <img src='https://via.placeholder.com/300' alt='store' />
        </div>
      </div>

      <div className='Section2'>
        <h1>Contacts</h1>
      </div>

      <div className='Section3'>
        <h1>Location</h1>
      </div>
    </div>
  );
}

export default Home;