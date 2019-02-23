import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import AuthHelper from '../../../helpers/AuthHelper';
import ModalAction from '../../../actions/modal.action';
import MenuAction from '../../../actions/menu.action';

export const Meal = ({ meal, showModal, fetchMeal }) => {
  const { id, imageUrl, title, description, price } = meal;
  return (
    <div key={id} className="meal-card m-card">
      <img src={imageUrl} alt="Avatar" style={{ width: '100%', height: '120px' }} />
      <div className="container">
        <h4 style={{ marginTop: '20px' }}>
          <b>{title.slice(0, 19)}</b>
        </h4>
        <p className="min-p">{description}</p>
        <p className="price">
          <b>₦ {price}</b>
        </p>
        {AuthHelper.checkUserIsAuthenticated(localStorage.userAuthToken) &&
        !AuthHelper.checkUserIsAdmin(localStorage.userAuthToken) ? (
          <button
            type="button"
            id="order-btn"
            className="bg-green"
            onClick={evt => {
              evt.preventDefault();
              fetchMeal(meal);
              showModal();
            }}
          >
            Order
          </button>
        ) : null}
      </div>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.object.isRequired,
  showModal: PropTypes.func,
  fetchMeal: PropTypes.func,
};

const mapDispatchToProps = {
  showModal: ModalAction.showModal,
  fetchMeal: MenuAction.fetchMeal,
};

export default connect(
  null,
  mapDispatchToProps,
)(Meal);
