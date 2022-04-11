import React from 'react';
import './header.css';
import ButtonHeader from './ButtonHeader';
import me from '../../assets/yops.png';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Juliana Bearzi</h1>
        <h5 className='text-light'>Systems Engineering Student</h5>
        <ButtonHeader />

        <div className='me'>
          <img src={me} alt='me' />
        </div>
      </div>
    </header>
  );
};

export default Header;
