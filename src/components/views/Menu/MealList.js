import React from 'react';
import PropTypes from 'prop-types';
import MealCard from './Meal';

const MealList = ({ menu, isLoading, hasError }) => (
  <section
    id="services"
    className="section-padding"
    style={{ display: isLoading || hasError ? 'none' : 'block' }}
  >
    <h2 id="offer-message" className="text-center" style={{ color: '#d64541' }}>
      Our Meal Offers
    </h2>
    <div className="meals-container" id="menu-holder">
      {menu.map(meal => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </div>
  </section>
);

MealList.propTypes = {
  menu: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
};

export default MealList;
