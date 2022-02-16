import React from 'react';
import Popup from './Popup';
import successIcon from '../images/success-icon.svg';
import failedIcon from '../images/failed-icon.svg';

function InfoTooltip({ isOpen, onClose, name }) {
  /* временный hardcore отрисовки */
  const isSuccess = true;
  return (
    <Popup
      isOpen={isOpen}
      isForm={true}
      onClose={onClose}
      btnAriaText='Закрыть.'
      className={`${isOpen ? `popup_opened` : ``}`.trim()}
    >
      {/* рефакторинг классов - сокращение кода */}
      <div className='popup__infotooltip'>
        {isSuccess ? (
          <>
            <img
              className='popup__infotooltip-pic'
              src={successIcon}
              alt='Чёрная галочка в кружке, обозначающая успешную регистрацию.'
            />
            <h2 className='popup__title popup__title_type_centered'>Вы успешно зарегистрировались!</h2>
          </>
        ) : (
          <>
            <img
              className='popup__infotooltip-pic'
              src={failedIcon}
              alt='Красный крестик в кружке, обозначающий неуспешную регистрацию.'
            />
            <h2 className='popup__title popup__title_type_centered'>Что-то пошло не так! Попробуйте ещё раз.</h2>
          </>
        )}
      </div>
    </Popup>
  );
}

export default InfoTooltip;
