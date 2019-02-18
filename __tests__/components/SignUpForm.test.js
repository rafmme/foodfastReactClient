import React from 'react';
import { shallow } from 'enzyme';
import { SignUpForm } from '../../src/components/views/SignUp/SignUpForm';

const signUpUser = jest.fn();
const preventDefault = jest.fn();
const wrap = shallow(<SignUpForm signUpUser={signUpUser} history={{}} />);

describe('<SignUpForm />', () => {
  it('should render component successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should simulate click event on the submit button', () => {
    wrap.find('#signUpForm').simulate('submit', {
      preventDefault,
    });

    expect(wrap.state('hasValidationError')).toEqual(true);
  });

  it('should update the state when input fields change', () => {
    wrap.find('#email').simulate('change', {
      preventDefault,
      target: { value: 'john@email.com', id: 'email' },
    });
    wrap.find('#password').simulate('change', {
      target: { value: 'asdfghjk', id: 'password' },
      preventDefault,
    });
    wrap.find('#fullname').simulate('change', {
      target: { value: 'Faray', id: 'fullname' },
      preventDefault,
    });

    expect(wrap.state('inputFieldsData').email).toEqual('john@email.com');
    expect(wrap.state('inputFieldsData').password).toEqual('asdfghjk');
    expect(wrap.state('inputFieldsData').fullname).toEqual('Faray');
  });

  it('should submit for if input are valid', () => {
    wrap.setState({
      hasValidationError: false,
      inputFieldsData: {
        email: 'tia@andela.com',
        password: 'asdfghjy',
        fullname: 'Faray',
      },
    });
    wrap.find('#signUpForm').simulate('submit', {
      preventDefault,
    });

    expect(signUpUser.mock.calls.length).toEqual(1);
  });
});
