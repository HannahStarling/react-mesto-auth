import React from 'react';
import Popup from './Popup';

function PopupWithForm({ hasInput, name, isOpen, title, children, onClose, buttonText, onSubmit, ...props }) {
  return (
    <Popup
      isOpen={isOpen}
      isForm={true}
      onClose={onClose}
      btnAriaText='Закрыть форму.'
      className={`${isOpen ? `popup_type_${name} popup_opened` : `popup_type_${name}`}`}
    >
      <form onSubmit={onSubmit} className='popup__form' id='card' name={name}>
        <h2 className={`popup__title ${hasInput ? '' : 'popup__title_type_noinputs'}`}>{title}</h2>
        <fieldset className='popup__input-container'>
          {children}
          <button className='button popup__btn popup__btn_action_submit' type='submit'>
            {buttonText}
          </button>
        </fieldset>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
