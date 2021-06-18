import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../UI/FormControls/Input';
import Heading from '../UI/Typography/Heading';
import Button from './../UI/Button/Button';
import Font from './../UI/Typography/Font';
import SelectPos from '../SelectPos/SelectPos';
import {
  checkValueLength,
  validationEmail,
  validationPhone,
} from './validationForm';
import FileUpload from '../UI/FileUpload/FileUpload';
import { sendUser } from '../../redux/actions/sendUser';
import Modal from './../Modal/Modal';

const SignUpForm = ({ title, descr }) => {
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [isValidName, setIsValidName] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [isValidPhone, setIsValidPhone] = React.useState(false);
  const [isValidFile, setIsValidFile] = React.useState(false);
  const [formSendSuccess, setFormSendSuccess] = React.useState(false);
  const [formError, setFormError] = React.useState(null);
  const [isFormWorking, setIsFormWorking] = React.useState(true);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [radioChecked, setRadioChecked] = React.useState(1);
  const [file, setFile] = React.useState('');
  const [modalOpen, setModalOpen] = React.useState(false);
  const errorBoxRef = React.useRef();

  const sendUserSuccess = useSelector(state => state.sendUserReducer);
  const sendUserError = useSelector(state => state.sendUserReducer.error);
  const dispatch = useDispatch();

  const fillInputs = () => {
    const savedName = window.sessionStorage.getItem('user-name') || '';
    const savedEmail = window.sessionStorage.getItem('user-email') || '';
    const savedPhone = window.sessionStorage.getItem('user-phone') || '';

    if (savedName || savedEmail || savedPhone) {
      setName(savedName);
      validationInput('user-name', savedName, 2, 60);

      setEmail(savedEmail);
      validationInput('user-email', savedEmail, 2, 100);

      setPhone(savedPhone);
      validationInput('user-phone', savedPhone, 0, 13);
    }
  };

  React.useEffect(() => {
    fillInputs();
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (isValidName && isValidEmail && isValidPhone && isValidFile) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isValidName, isValidEmail, isValidPhone, isValidFile]);

  React.useEffect(() => {
    if (sendUserError) {
      setFormError(sendUserError);
    }

    if (sendUserSuccess.sendUser && sendUserSuccess.success) {
      setFormSendSuccess(true);
      setFormError(null);
    }
  }, [sendUserError, sendUserSuccess]);

  React.useEffect(() => {
    if (!isFormWorking) {
      setIsFormValid(false);
    }
  }, [isFormWorking]);

  const formSubmitHandler = event => {
    event.preventDefault();

    if (isFormValid) {
      setFormSendSuccess(false);
      setFormError(null);
      setModalOpen(true);
      dispatch(sendUser({ name, email, phone, radioChecked, file }));
    }
  };

  const validationInput = (nameInput, value, minLength, maxLength) => {
    const isCurrentLength = checkValueLength(value, minLength, maxLength);
    let isValid = true;

    if (nameInput === 'user-name') {
      isValid = isCurrentLength;
      window.sessionStorage.setItem('user-name', value);
      setIsValidName(isValid);
    }

    if (isCurrentLength && nameInput === 'user-email') {
      isValid = validationEmail(value);
      window.sessionStorage.setItem('user-email', value);
      setIsValidEmail(isValid);
    }

    if (isCurrentLength && nameInput === 'user-phone') {
      isValid = validationPhone(value);
      window.sessionStorage.setItem('user-phone', value);
      setIsValidPhone(isValid);
    }

    return isValid;
  };

  return (
    <div className="container">
      <div className="sign-up" id="sign-up">
        <div className="sign-up__head">
          <Heading tag="h1" type="normal" className="sign-up__title">
            {title}
          </Heading>
          <Heading tag="h2" type="normal" className="sign-up__descr">
            {descr}
          </Heading>

          <div className="sign-up__form-box">
            {!isFormWorking ? (
              <div className="sign-up__error-box active" ref={errorBoxRef}>
                <Font type="normal">The form is not working at the moment</Font>
              </div>
            ) : null}

            <form className="sign-up-form" onSubmit={formSubmitHandler}>
              <div className="sign-up-form__input-group">
                <Input
                  value={name}
                  setValue={setName}
                  validation={validationInput}
                  placeholder="Your name"
                  helperText={
                    formError?.fails?.name?.join('. ') ||
                    'Line length is limited'
                  }
                  isError={formError?.fails?.name?.length > 0}
                  minLength={2}
                  maxLength={60}
                  isRequired={true}
                  name="user-name"
                />
              </div>
              <div className="sign-up-form__input-group">
                <Input
                  value={email}
                  setValue={setEmail}
                  validation={validationInput}
                  placeholder="Email"
                  helperText={
                    formError?.fails?.email?.join('. ') ||
                    'Line length is limited'
                  }
                  isError={formError?.fails?.email?.length > 0}
                  minLength={2}
                  maxLength={100}
                  isRequired={true}
                  name="user-email"
                />
              </div>
              <div className="sign-up-form__input-group">
                <Input
                  value={phone}
                  setValue={setPhone}
                  validation={validationInput}
                  placeholder="Phone"
                  helperText={
                    formError?.fails?.phone?.join('. ') ||
                    'The number must start with +380'
                  }
                  isError={formError?.fails?.phone?.length > 0}
                  minLength={0}
                  maxLength={13}
                  isRequired={true}
                  name="user-phone"
                  type="tel"
                />
              </div>
              <div className="sign-up-form__select-pos">
                <SelectPos
                  title="Select your position"
                  setRadioChecked={setRadioChecked}
                  errors={formError?.fails?.position_id}
                  setIsFormWorking={setIsFormWorking}
                />
              </div>
              <FileUpload
                setFile={setFile}
                setIsValidFile={setIsValidFile}
                isRequired={true}
                className="sign-up-form__file-upload"
              />
              <Button type="yellow" isDisabled={!isFormValid} isSubmit={true}>
                <Font type="normal">Sign up</Font>
              </Button>
            </form>
          </div>
        </div>
      </div>
      {formError ? (
        <Modal
          isOpen={modalOpen}
          setModalOpen={setModalOpen}
          modalName="error"
          title="Errors"
          descr={formError.message}
        />
      ) : null}

      {formSendSuccess ? (
        <Modal
          isOpen={modalOpen}
          setModalOpen={setModalOpen}
          modalName="notification"
          title="Congratulations"
          descr="You have successfully passed the registration "
        />
      ) : null}
    </div>
  );
};

SignUpForm.propTypes = {
  title: PropTypes.string.isRequired,
  descr: PropTypes.string,
};

export default SignUpForm;
