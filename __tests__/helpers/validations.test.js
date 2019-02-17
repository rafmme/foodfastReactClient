import { extractErrorMessages, validateLoginInput } from '../../src/helpers/validations';

const emptyInput = {
  password: '',
  email: '',
};

const shortInput = {
  password: 'u',
  email: 'jjjhhhk.com',
};

describe('Login Input Validation Test', () => {
  it('should give error for empty string input', () => {
    expect(Object.keys(validateLoginInput(emptyInput)).length).toEqual(2);
  });

  it('should give error for short string input', () => {
    expect(Object.keys(validateLoginInput(shortInput)).length).toEqual(2);
  });

  it('should give error for invalid string input', () => {
    expect(Object.keys(validateLoginInput({})).length).toEqual(2);
  });
});

describe('extractErrorMessages function Test', () => {
  it('should successfully extract error messages', () => {
    expect(extractErrorMessages(Object.values(validateLoginInput({}))).length).toEqual(55);
  });

  it('should return nothing if array is empty', () => {
    expect(extractErrorMessages([]).length).toEqual(0);
  });
});
