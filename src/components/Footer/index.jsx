import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Technologies</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__copyright'>
        <small>&copy; Juliana Bearzi. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
