import React from 'react';
import PropTypes from 'prop-types';

import Input from '../UI/FormControls/Input';
import Heading from '../UI/Typography/Heading';
import Button from './../UI/Button/Button';
import Font from './../UI/Typography/Font';
import SelectPos from '../SelectPos/SelectPos';
import { useDispatch } from 'react-redux';

import {
  checkValueLength,
  validationEmail,
  validationPhone,
} from './validationForm';
import FileUpload from '../UI/FileUpload/FileUpload';
import { sendUser } from '../../redux/actions/sendUser';

const SignUpForm = ({ title, descr }) => {
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [isValidName, setIsValidName] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [isValidPhone, setIsValidPhone] = React.useState(false);
  const [isValidFile, setIsValidFile] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [radioChecked, setRadioChecked] = React.useState(1);
  const [file, setFile] = React.useState('');

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isValidName && isValidEmail && isValidPhone && isValidFile) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isValidName, isValidEmail, isValidPhone, isValidFile]);

  const formSubmitHandler = event => {
    event.preventDefault();

    if (isFormValid) {
      dispatch(sendUser({ name, email, phone, radioChecked, file }));
    }
  };

  const validationInput = (nameInput, value, minLength, maxLength) => {
    const isCurrentLength = checkValueLength(value, minLength, maxLength);
    let isValid = true;

    if (nameInput === 'user-name') {
      isValid = isCurrentLength;
      setIsValidName(isValid);
    }

    if (isCurrentLength && nameInput === 'user-email') {
      isValid = validationEmail(value);
      setIsValidEmail(isValid);
    }

    if (isCurrentLength && nameInput === 'user-phone') {
      isValid = validationPhone(value);
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
            <form className="sign-up-form" onSubmit={formSubmitHandler}>
              <div className="sign-up-form__input-group">
                <Input
                  value={name}
                  setValue={setName}
                  validation={validationInput}
                  placeholder="Your name"
                  helperText="Длина поля ограничена"
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
                  helperText="Длина поля ограничена"
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
                  helperText="Номер должен начинаться с кода +380"
                  minLength={0}
                  maxLength={13}
                  isRequired={true}
                  name="user-phone"
                />
              </div>
              <div className="sign-up-form__select-pos">
                <SelectPos
                  title="Select your position"
                  setRadioChecked={setRadioChecked}
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
    </div>
  );
};

SignUpForm.propTypes = {
  title: PropTypes.string.isRequired,
  descr: PropTypes.string,
};

export default SignUpForm;
