import React, { useState } from 'react';
import logo from './assets/icons/logo.png';
import './App.css';
import Home from './pages/home/home.js'
import Menu from './pages/menu/menu.js'


function App() {
  //Initialize state to store the current page
  const [currentPage, setCurrentPage] = useState('Home');

  //Create click handler functions
  const showHome = () => setCurrentPage('Home');
  const showMenu = () => setCurrentPage('Menu');

  return (
    <div className="App">
      <header className="App-header">
        <a class="logo">
          <img src={logo} alt="logo" />
        </a>
        <div class="title">
          COMPANY NAME
        </div>
      </header>

      <div class="NavBar">
        <a className={currentPage === 'Home' ? 'highlight' : ''} onClick={showHome}>Home</a>
        <a className={currentPage === 'Menu' ? 'highlight' : ''} onClick={showMenu}>Menu</a>
      </div>

      {currentPage === 'Home' && <Home />}
      {currentPage === 'Menu' && <Menu />}
    </div>
  );
}

export default App;
