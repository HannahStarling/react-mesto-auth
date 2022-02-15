import React from 'react';
import headerLogo from '../images/logo.svg';

function Header() {
  return (
    <header className='header page__header'>
      <a href='#' className='logo logo_place_header link-opacity'>
        <img
          className='logo__pic'
          src={headerLogo}
          alt='Логотип приложения Место. Слово Место латиницей с подписью Россия на английском языке.'
        />
      </a>
    </header>
  );
}

export default Header;
