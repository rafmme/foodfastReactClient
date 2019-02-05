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

const extractErrorMessages = arrayOfMessages => {
  let text = '';
  arrayOfMessages.forEach(message => {
    text = `${text + message};\n`;
  });
  return text;
};

export { validateLoginInput, extractErrorMessages };
