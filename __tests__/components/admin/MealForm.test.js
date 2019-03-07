import React from 'react';
import { shallow } from 'enzyme';
import { MealForm } from '../../../src/components/views/Admin/Menu/MealForm';

const hideModal = jest.fn();
const removeMeal = jest.fn();
const addMeal = jest.fn();
const preventDefault = jest.fn();
const wrap = shallow(<MealForm hideModal={hideModal} addMeal={addMeal} removeMeal={removeMeal} />);

describe('<MealForm />', () => {
  it('should render component successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should simulate click event on the submit button', () => {
    wrap.find('#add-meal-form').simulate('submit', {
      preventDefault,
    });

    expect(wrap.state('hasValidationError')).toEqual(true);
  });

  it('should update the state when input fields change', () => {
    wrap.find('input#title').simulate('change', {
      preventDefault,
      target: { value: 'Jollof Rice', id: 'title' },
    });
    wrap.find('textarea#description').simulate('change', {
      target: { value: 'Nice Meal', id: 'description' },
      preventDefault,
    });
    wrap.find('input#price').simulate('change', {
      target: { value: 400, id: 'price' },
      preventDefault,
    });
    wrap.find('input#image').simulate('change', {
      target: {
        files: ['dummyValue.png'],
      },
      preventDefault,
    });

    wrap.setState({
      hasValidationError: false,
      inputFieldsData: {
        title: 'Jollof Rice',
        price: 400,
        description: 'Nice Meal',
        image: { files: ['dummyValue.png'] },
      },
    });

    expect(wrap.state('inputFieldsData').title).toEqual('Jollof Rice');
    expect(wrap.state('inputFieldsData').description).toEqual('Nice Meal');
    expect(wrap.state('inputFieldsData').price).toEqual(400);
  });

  it('should submit for if input are valid', () => {
    wrap.setState({
      hasValidationError: false,
      inputFieldsData: {
        title: 'Jollof Rice',
        price: 400,
        description: 'Nice Meal',
        image: { files: ['dummyValue.png'] },
      },
    });
    wrap.find('#add-meal-form').simulate('submit', {
      preventDefault,
    });

    expect(addMeal.mock.calls.length).toEqual(1);
  });

  it('should simulate click event on modal close icon', () => {
    wrap.find('#close').simulate('click', {
      preventDefault,
    });

    expect(preventDefault.mock.calls.length).toBeGreaterThan(0);
  });
});
