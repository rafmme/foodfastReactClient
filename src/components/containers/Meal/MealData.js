/* eslint-disable no-new */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuAction from '../../../actions/menu.action';
import PageNumbers from '../../views/Pagination/PageNumbers';

export class MealData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 0 };
    this.onClickPageNumber = this.onClickPageNumber.bind(this);
  }

  componentDidMount() {
    const { fetchMenu } = this.props;
    fetchMenu();
  }

  getNumberOfPages(itemsPerPage) {
    const { menu } = this.props;
    const numberOfPages = Math.ceil(menu.length / itemsPerPage);
    return Array.from(Array(numberOfPages).keys());
  }

  paginatedLists = itemsPerPage => {
    const { currentPage } = this.state;
    const { menu } = this.props;

    if (!Array.isArray(menu)) new Error('Invalid supplied Lists.');
    return menu.slice(
      currentPage * parseInt(itemsPerPage, 0),
      (currentPage + 1) * parseInt(itemsPerPage, 0),
    );
  };

  onClickPageNumber = page => {
    /* istanbul ignore next */
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage } = this.state;
    const { render, itemsPerPage } = this.props;
    return (
      <div>
        {render(this.paginatedLists(itemsPerPage))}

        <PageNumbers
          items={this.getNumberOfPages(itemsPerPage)}
          currentPage={currentPage}
          onClickPageNumber={this.onClickPageNumber}
        />
      </div>
    );
  }
}

MealData.propTypes = {
  render: PropTypes.func.isRequired,
  menu: PropTypes.array.isRequired,
  fetchMenu: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number,
};

const mapStateToProps = state => ({
  menu: state.menu.menu,
});
const mapDispatchToProps = { fetchMenu: MenuAction.fetchMenu };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealData);
