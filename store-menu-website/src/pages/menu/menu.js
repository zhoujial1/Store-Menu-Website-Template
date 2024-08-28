import React, { useState } from 'react';
import './menu.css';
import FriedFood from './categories/fried_food/friedfood.js';
import BurgersToast from './categories/burgers_toast/burgers_toast.js';
import ChineseFood from './categories/chinese_food/chinesefood.js';
import Packs from './categories/packs/packs.js';

function MenuLayout({ onCategoryClick }) {
  return (
    <div className='Background'>
      <div className='Grid'>
        <div className='Genre1' onClick={() => onCategoryClick('fried')}>
          <img src='https://via.placeholder.com/300' alt='Deep Fried' />
          <div>Deep Fried</div>
        </div>
        <div className='Genre2' onClick={() => onCategoryClick('burgers')}>
          <img src='https://via.placeholder.com/300' alt='Burgers/Toast' />
          <div>Burgers/Toast</div>
        </div>
        <div className='Genre3' onClick={() => onCategoryClick('chinese')}>
          <img src='https://via.placeholder.com/300' alt='Chinese Food' />
          <div>Chinese Food</div>
        </div>
        <div className='Genre4' onClick={() => onCategoryClick('packs')}>
          <img src='https://via.placeholder.com/300' alt='packs' />
          <div>Packs</div>
        </div>
      </div>
    </div>
  );
}

const Menu = () => {
  const [category, setCategory] = useState('');

  function onCategoryClick(category) {
    setCategory(category);
  }

  function onBackClick() {
    setCategory('');
  }

  return (
    <div>
      {category ? (
        <div>
          <button onClick={onBackClick}>Back</button>
          {category === 'fried' && <FriedFood />}
          {category === 'burgers' && <BurgersToast />}
          {category === 'chinese' && <ChineseFood />}
          {category === 'packs' && <Packs />}
        </div>
      ) : (
        <MenuLayout onCategoryClick={onCategoryClick} />
      )}
    </div>
  );
}

export default Menu;
