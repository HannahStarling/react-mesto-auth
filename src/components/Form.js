import React from 'react';

function Form({ formBlockClass, onSubmit, name, hasInput, title, children, buttonText, ...props }) {
  return (
    <form onSubmit={onSubmit} className={`${formBlockClass}__form`} id={name} name={name}>
      <h2 className={`${formBlockClass}__title ${hasInput ? `` : `${formBlockClass}__title_type_noinputs`}`.trim()}>
        {title}
      </h2>
      <fieldset className={`${formBlockClass}__input-container`}>{children}</fieldset>
      <button className={`button ${formBlockClass}__btn ${formBlockClass}__btn_action_submit`} type='submit'>
        {buttonText}
      </button>
    </form>
  );
}

export default Form;
