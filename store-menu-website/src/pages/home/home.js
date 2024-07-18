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
        <div className='Contacts'>
          <p>Phone: 123-456-7890</p>
          <p>Email: Someemail@gmail.com</p>
          <p>Fax: (123)-456-7890</p>
        </div>
      </div>

      <div className='Section3'>
        <h1>Location</h1>
        <div className='Location'>
          <p>Address: 123 Main St, New York, NY 10001</p>
          <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.171219648758!2d-73.98785308459425!3d40.74881797932853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259c90d7c4e5d%3A0x1f6b9c3d0b9c7b5d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1632384094113!5m2!1sen!2sus' title='map' width='600' height='450' allowfullscreen='' loading='lazy'></iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;