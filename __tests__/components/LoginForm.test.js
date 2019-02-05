import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from '../../src/components/views/Login/LoginForm';

const loginUser = jest.fn();
const preventDefault = jest.fn();
const wrap = shallow(<LoginForm loginUser={loginUser} history={{}} />);

describe('<LoginForm />', () => {
  it('should render component successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should simulate click event on the submit button', () => {
    wrap.find('#loginForm').simulate('submit', {
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

    expect(wrap.state('inputFieldsData').email).toEqual('john@email.com');
    expect(wrap.state('inputFieldsData').password).toEqual('asdfghjk');
  });

  it('should submit for if input are valid', () => {
    wrap.setState({
      hasValidationError: false,
      inputFieldsData: {
        email: 'tia@andela.com',
        password: 'asdfghjy',
      },
    });
    wrap.find('#loginForm').simulate('submit', {
      preventDefault,
    });

    expect(loginUser.mock.calls.length).toEqual(1);
  });
});
