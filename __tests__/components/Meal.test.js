import React from 'react';
import { mount } from 'enzyme';
import { Meal } from '../../src/components/views/Menu/Meal';
import mockMenu from '../../__mocks__/mockMenu';
import AuthHelper from '../../src/helpers/AuthHelper';

const showModal = jest.fn();
const preventDefault = jest.fn();
const fetchMeal = jest.fn();

AuthHelper.checkUserIsAuthenticated = jest.fn().mockReturnValueOnce(true);
AuthHelper.checkUserIsAdmin = jest.fn().mockReturnValueOnce(false);

const wrap = mount(<Meal meal={mockMenu[0]} showModal={showModal} fetchMeal={fetchMeal} />);

describe('<Meal/>', () => {
  afterAll(() => {});
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should simulate onClick event on order button', () => {
    wrap.find('#order-btn').simulate('click', { preventDefault });
    expect(fetchMeal.mock.calls.length).toEqual(1);
    expect(preventDefault.mock.calls.length).toEqual(1);
    expect(showModal.mock.calls.length).toEqual(1);
  });
});
