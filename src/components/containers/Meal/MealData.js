import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuAction from '../../../actions/menu.action';

export class MealData extends React.Component {
  componentDidMount() {
    const { fetchMenu } = this.props;
    fetchMenu();
  }

  render() {
    const { render, menu } = this.props;
    return render({
      menu,
    });
  }
}

MealData.propTypes = {
  render: PropTypes.func.isRequired,
  menu: PropTypes.array.isRequired,
  fetchMenu: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  menu: state.menu.menu,
});
const mapDispatchToProps = { fetchMenu: MenuAction.fetchMenu };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealData);
