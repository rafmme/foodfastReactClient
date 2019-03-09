/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalAction from '../../../../actions/modal.action';
import MenuAction from '../../../../actions/menu.action';
import { validateMealInput, extractErrorMessages } from '../../../../helpers/validations';

export class MealForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasValidationError: false,
      validationErrors: [],
      inputFieldsData: {
        title: '',
        description: '',
        price: 0,
        image: {},
      },
    };
  }

  handleSubmit = async evt => {
    evt.preventDefault();
    const { inputFieldsData } = this.state;
    const { hideModal, addMeal } = this.props;
    const errors = validateMealInput(inputFieldsData);

    if (Object.keys(errors).length >= 1) {
      this.setState({
        hasValidationError: true,
        validationErrors: Object.values(errors),
      });
      return;
    }
    this.setState(prevState => ({
      ...prevState,
      inputFieldsData,
      hasValidationError: false,
      validationErrors: [],
    }));
    addMeal(inputFieldsData, hideModal);
    await this.setState({
      hasValidationError: false,
      validationErrors: [],
      inputFieldsData: {
        title: '',
        description: '',
        price: 0,
        image: {},
      },
    });
  };

  handleChange = async evt => {
    evt.preventDefault();
    const { inputFieldsData } = this.state;
    if (evt.target.id === 'price') {
      inputFieldsData.price = parseInt(evt.target.value, 10);
    } else {
      inputFieldsData[evt.target.id] = evt.target.value;
    }
    await this.setState(prevState => ({
      ...prevState,
      inputFieldsData,
      hasValidationError: false,
      validationErrors: [],
    }));
  };

  handleImageFieldChange = async evt => {
    evt.preventDefault();
    const { inputFieldsData } = this.state;
    inputFieldsData[evt.target.id] = evt.target;
    await this.setState({ inputFieldsData });
  };

  render() {
    const { hideModal, removeMeal, mealAdded, hasError, isLoading, message } = this.props;
    const {
      validationErrors,
      hasValidationError,
      inputFieldsData: { title, description, price },
    } = this.state;
    return (
      <>
        <form id="add-meal-form" onSubmit={this.handleSubmit}>
          <div className="imgcontainer">
            <span
              id="close"
              style={{ marginTop: '-15px' }}
              onClick={async e => {
                e.preventDefault();
                await this.setState({
                  hasValidationError: false,
                  validationErrors: [],
                  inputFieldsData: {
                    title: '',
                    description: '',
                    price: 0,
                    image: {},
                  },
                });
                removeMeal();
                hideModal();
              }}
              className="close"
              title="Close Modal"
            >
              &times;
            </span>
          </div>
          <h3>Add New Food Item</h3>
          {/* istanbul ignore next */ ((hasValidationError && validationErrors) ||
            (hasError && mealError)) && (
            <div className="alert" id="error-message">
              <p style={{ marginTop: '10px' }}>
                <i className="fa fa-warning" /> &nbsp;
                {/* istanbul ignore next */ extractErrorMessages(validationErrors) ||
                  extractErrorMessages(orderError)}
              </p>
            </div>
          )}
          {/* istanbul ignore next */ mealAdded && !hasError && (
            <div className="alert bg-green text-center" id="success-message">
              <i className="fa fa-check" /> {message}
            </div>
          )}
          <label htmlFor="title">Food Name</label>
          <input
            type="text"
            value={title}
            id="title"
            placeholder="Food Name"
            onChange={this.handleChange}
          />
          <label htmlFor="desc">Description</label>
          <textarea
            style={{ height: '70px' }}
            value={description}
            id="description"
            cols="30"
            rows="10"
            placeholder="Food Description"
            onChange={this.handleChange}
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            value={price}
            id="price"
            placeholder="Price"
            onChange={this.handleChange}
          />
          <label htmlFor="image">Image</label>
          <input
            type="file"
            name=""
            id="image"
            accept="image/*"
            onChange={this.handleImageFieldChange}
          />
          <button
            id="addMealBtn"
            type="submit"
            className="btn"
            style={{
              marginTop: 'auto',
              background: /* istanbul ignore next */ isLoading ? 'darkgray' : '#019875',
            }}
            disabled={isLoading}
          >
            {/* istanbul ignore next */ isLoading ? (
              <span>
                <i className="fa fa-spinner fa-spin" /> Adding meal...
              </span>
            ) : (
              'Add New Meal'
            )}
          </button>
        </form>
      </>
    );
  }
}

MealForm.propTypes = {
  hideModal: PropTypes.func,
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
  mealError: PropTypes.array,
  mealAdded: PropTypes.bool,
  message: PropTypes.string,
  addMeal: PropTypes.func,
  removeMeal: PropTypes.func,
};

MealForm.defaultProps = {
  isLoading: false,
};

/* istanbul ignore next */
const mapStateToProps = state => ({
  isLoading: state.menu.addMealLoader,
  hasError: state.menu.hasError,
  mealError: state.menu.mealError,
  mealAdded: state.menu.mealAdded,
  message: state.menu.message,
});

const mapDispatchToProps = {
  hideModal: ModalAction.hideModal,
  addMeal: MenuAction.addMeal,
  removeMeal: MenuAction.removeMeal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealForm);
