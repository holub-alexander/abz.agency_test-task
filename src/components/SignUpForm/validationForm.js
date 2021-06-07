const checkValueLength = (str, minLength, maxLength) => {
  let isValid = true;

  if (str.length < minLength || str.length > maxLength) {
    isValid = false;
  }

  return isValid;
};

const validationEmail = email => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(String(email).toLowerCase());
};

const validationPhone = phone => {
  // eslint-disable-next-line
  const isValid = /^[\+]{0,1}380([0-9]{9})$/.test(phone);
  return isValid;
};

export { checkValueLength, validationEmail, validationPhone };
