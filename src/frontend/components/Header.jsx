import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.styl';

const Header = (props) => {

  return (
    <header className='header'>
      <Link to='/' className='link'>
        Home
      </Link>
    </header>
  );
};

export default Header;
