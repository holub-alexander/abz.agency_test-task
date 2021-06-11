import React from 'react';
import PropTypes from 'prop-types';

import Button from './../UI/Button/Button';
import Font from './../UI/Typography/Font';
import ScrollLock from 'react-scrolllock';

const Modal = props => {
  const {
    isOpen,
    setModalOpen,
    modalName = '',
    title = 'Title',
    descr = '',
  } = props;
  const className = ['modal', modalName];

  const buttonClinckHandler = event => {
    setModalOpen(false);
    event.target.closest('.modal').classList.remove('modal--active');
  };

  if (isOpen) {
    className.push('modal--active');
  }

  return (
    <ScrollLock isActive={isOpen}>
      <div>
        <div className={className.join(' ')}>
          <div className="overlay"></div>
          <div className="modal__content">
            <p className="modal__title">{title}</p>
            <p className="modal__descr">{descr}</p>
            <div className="modal__footer">
              <Button type="yellow" clickHandler={buttonClinckHandler}>
                <Font type="normal">Great</Font>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ScrollLock>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  modalName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descr: PropTypes.string,
};

export default Modal;
