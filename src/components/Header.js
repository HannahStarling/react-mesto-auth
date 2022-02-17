import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../images/logo.svg';

function Header({ ...props }) {
  const location = useLocation();
  const REGISTER_ROUTE = '/sign-up';
  const LOGIN_ROUTE = '/sign-in';
  const isRegister = location.pathname === LOGIN_ROUTE;
  const isLogin = location.pathname !== LOGIN_ROUTE && location.pathname !== REGISTER_ROUTE;
  const loginText = isLogin ? 'Выйти' : isRegister ? 'Регистрация' : 'Войти';

  return (
    <header className='header page__header'>
      <Link to='/' className='logo logo_place_header link-opacity'>
        <img
          className='logo__pic'
          src={headerLogo}
          alt='Логотип приложения Место. Слово Место латиницей с подписью Россия на английском языке.'
        />
      </Link>
      <div className='header__info'>
        {isLogin && <p className='header__profile-email'>email@mail.com</p>}
        <Link to={isRegister ? REGISTER_ROUTE : LOGIN_ROUTE} className='header__link link-opacity'>
          {loginText}
        </Link>
      </div>
    </header>
  );
}

export default Header;
