import React from 'react';
import { PropTypes } from 'prop-types';
import AuthHelper from '../../../helpers/AuthHelper';

const Meal = ({ meal }) => {
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
          <button type="button" className="bg-green">
            Order
          </button>
        ) : null}
      </div>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default Meal;
