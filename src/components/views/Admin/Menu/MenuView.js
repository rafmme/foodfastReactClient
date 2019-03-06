import React from 'react';
import PropTypes from 'prop-types';
import Meal from './Meal';

export const MenuView = ({ menu, isLoading, hasError }) => (
  <section
    id="adm-food"
    className="section-padding"
    style={{ display: isLoading || hasError ? 'none' : 'block' }}
  >
    <div className="meals-container" id="meals-holder">
      {menu.map(meal => (
        <Meal key={meal.id} meal={meal} />
      ))}
    </div>
  </section>
);

MenuView.propTypes = {
  menu: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
};

export default MenuView;
