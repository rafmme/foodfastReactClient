/**
 * @description a function to validate sign in data
 * @param {String} password
 * @returns {Object} an objects containing the error messages
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
  if (password.trim() === '' || !password) {
    errors.password = 'Password field is empty';
  }
  const checkPassword = password.trim() !== '' && (password.length < 8 || password.length > 20);
  if (checkPassword) {
    errors.password = 'Password should be within the range of 8 - 30 characters';
  }

  return errors;
};

/**
 * @description a function to validate sign up data
 * @param {String} fullname
 * @param {String} password
 * @returns {Object} an objects containing the error messages
 */
const validateSignUpInput = ({ fullname, password, email }) => {
  const errors = {};
  // eslint-disable-next-line max-len
  const emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  if (email && email.match(emailPattern) !== true) {
    errors.email = 'email address is valid';
  }
  if (!email) {
    errors.email = 'email address field is empty';
  }
  if (fullname.trim() === '') {
    errors.fullname = "Full Name field can't be empty";
  }
  if (fullname.trim() !== '' && fullname.length < 3 && fullname.length > 300) {
    errors.fullname = 'Fullname should be within the range of 3 - 300 characters';
  }
  if (password.trim() === '') {
    errors.password = 'Password field is empty';
  }
  const checkPassword = password.trim() !== '' && (password.length < 8 || password.length > 20);
  if (checkPassword) {
    errors.password = 'Password should be within the range of 8 - 30 characters';
  }
  return errors;
};

const getNameInitials = fullname => {
  const splitNameArray = `${fullname}`.split(' ');
  const nameInitials =
    splitNameArray.length > 1
      ? `${splitNameArray[0][0]}${splitNameArray[1][0]}`
      : `${splitNameArray[0][0]}`;
  return nameInitials;
};

const getRedirectionLink = jwtToken => {
  let redirectionLink = '';
  if (jwtToken) {
    redirectionLink = jwtToken === 'admin' ? '/admin' : '/';
  } else {
    redirectionLink = '/infopage';
  }
  return redirectionLink;
};

const extractErrorMessages = arrayOfMessages => {
  let text = '';
  arrayOfMessages.forEach(message => {
    text = `${text + message};\n`;
  });
  return text;
};

export {
  validateSignUpInput,
  validateLoginInput,
  getNameInitials,
  getRedirectionLink,
  extractErrorMessages,
};
