import React from 'react';
import Form from './Form';
import Popup from './Popup';

function PopupWithForm({ name, isOpen, onClose, ...props }) {
  return (
    <Popup
      isOpen={isOpen}
      isForm={true}
      onClose={onClose}
      btnAriaText='Закрыть форму.'
      className={`${isOpen ? `popup_type_${name} popup_opened` : `popup_type_${name}`}`}
    >
      <Form formBlockClass='popup' name={name} {...props} />
    </Popup>
  );
}

export default PopupWithForm;
