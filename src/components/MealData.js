import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import MealAction from '../actions/mealActions';

class MealData extends React.Component {
  componentDidMount() {
    const { fetchMenu } = this.props;
    fetchMenu();
  }

  render() {
    const { render, meals } = this.props;
    return render({
      meals,
    });
  }
}

MealData.propTypes = {
  render: PropTypes.func.isRequired,
  meals: PropTypes.array.isRequired,
  fetchMenu: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  meals: state.mealReducer.meals,
});
const mapDispatchToProps = { fetchMenu: MealAction.fetch };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealData);
