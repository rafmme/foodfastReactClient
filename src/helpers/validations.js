/**
 * @description a function to validate login data
 * @param {object} loginData
 * @returns {object} an objects containing the error messages
 */
const validateLoginInput = ({ email, password }) => {
  const errors = {};
  // eslint-disable-next-line max-len
  const emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  if (email && emailPattern.test(email) !== true) {
    errors.email = 'Email address is not valid';
  }
  if (!email) {
    errors.email = 'Email address field is empty';
  }
  if ((typeof password === 'string' && password.trim() === '') || !password) {
    errors.password = 'Password field is empty';
  }
  const checkPassword =
    typeof password === 'string' &&
    password.trim() !== '' &&
    (password.length < 8 || password.length > 20);
  if (checkPassword) {
    errors.password = 'Password should be within the range of 8 - 30 characters';
  }

  return errors;
};

/**
 * @description a function to validate sign up data
 * @param {object} signUpData
 * @returns {object} an objects containing the error messages
 */
const validateSignUpInput = ({ email, password, fullname }) => {
  const errors = validateLoginInput({ email, password });
  const fullNamePattern = /[`~/\\±§_+\-=!@#$%^&*(),.?":{}|<>0-9]/g;

  if (fullname.trim() === '') {
    errors.fullname = 'Fullname cannot be empty';
  }
  if (fullname.trim() !== '' && fullname.length < 2) {
    errors.fullname = 'Fullname is too short';
  }
  if (fullname.length >= 2 && fullname.match(fullNamePattern)) {
    errors.fullname = 'Fullname cannot contain special characters or numbers';
  }
  return errors;
};

const extractErrorMessages = arrayOfMessages => {
  let text = '';
  arrayOfMessages.forEach(message => {
    text = `${text + message};\n`;
  });
  return text;
};

export { validateLoginInput, extractErrorMessages, validateSignUpInput };
