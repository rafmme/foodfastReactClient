import React from 'react';
import PropTypes from 'prop-types';
import Meal from './Meal';

const MealList = ({ meals, showModal }) => (
  <section id="services" className="section-padding">
    <h2 id="offer-message" className="text-center" style={{ color: '#d64541' }}>
      Our Meal Offers
    </h2>
    <div className="meals-container" id="menu-holder">
      {meals.map(meal => (
        <Meal key={meal.id} meal={meal} showModal={showModal} />
      ))}
    </div>
  </section>
);

MealList.propTypes = {
  meals: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default MealList;
