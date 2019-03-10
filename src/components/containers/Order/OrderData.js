/* eslint-disable react/no-array-index-key */
/* eslint-disable no-new */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import PageNumbers from '../../views/Pagination/PageNumbers';

export default class OrderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 0 };
    this.onClickPageNumber = this.onClickPageNumber.bind(this);
  }

  getNumberOfPages(itemsPerPage) {
    const { orders } = this.props;
    const numberOfPages = Math.ceil(orders.length / itemsPerPage);
    return Array.from(Array(numberOfPages).keys());
  }

  paginatedLists = itemsPerPage => {
    const { currentPage } = this.state;
    const { orders } = this.props;

    if (!Array.isArray(orders)) new Error('Invalid supplied Lists.');
    return orders.slice(
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

OrderContainer.propTypes = {
  render: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired,
  itemsPerPage: PropTypes.number,
};
