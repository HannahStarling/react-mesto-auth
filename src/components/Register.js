import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

function Register({ onSignUp, ...props }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    name === 'email' ? setEmail(value) : setPassword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSignUp(password, email);
  }

  return (
    <section className='login content__center'>
      <Form
        formBlockClass='login'
        hasInput={true}
        onSubmit={handleSubmit}
        name='sign-up'
        title='Регистрация'
        buttonText='Зарегистрироваться'
      >
        <label className='login__input-label'>
          <input
            value={email}
            onChange={handleChange}
            autoComplete='off'
            type='email'
            className='login__item'
            id='email'
            name='email'
            placeholder='Email'
            required
          />
          <span className='login__input-error login__input-error_type_email'></span>
        </label>
        <label className='login__input-label'>
          <input
            value={password}
            onChange={handleChange}
            autoComplete='off'
            type='password'
            className='login__item'
            id='password'
            name='password'
            placeholder='Пароль'
            required
          />
          <span className='login__input-error login__input-error_type_password'></span>
        </label>
      </Form>
      <p className='login__signin'>
        Уже зарегистрированы?&nbsp;
        <Link to='sign-in' className='login__signin-link link-opacity'>
          Войти
        </Link>
      </p>
    </section>
  );
}

export default Register;
