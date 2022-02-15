import React from 'react';
import Form from './Form';

function Register({ handleSubmit, ...props }) {
  return (
    <section className='sign-up content__center'>
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
            defaultValue=''
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
            defaultValue=''
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
    </section>
  );
}

export default Register;
