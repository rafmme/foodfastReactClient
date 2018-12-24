import React from 'react';
import { PropTypes } from 'prop-types';

const Meal = ({ meal, showModal }) => {
  const { id, imageUrl, title, description, price } = meal;
  return (
    <div key={id} className="meal-card m-card">
      <img src={imageUrl} alt="Avatar" style={{ width: '100%', height: '120px' }} />
      <div className="container">
        <h4 style={{ marginTop: '20px' }}>
          <b>{title.slice(0, 19)}</b>
        </h4>
        <p className="min-p">${description}</p>
        <p className="price">
          <b>₦ {price}</b>
        </p>
        <button type="button" className="bg-green" onClick={e => showModal(e, meal)}>
          Order
        </button>
      </div>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.object.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default Meal;
