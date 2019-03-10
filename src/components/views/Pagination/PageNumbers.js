/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

/* istanbul ignore next */
const PageNumbers = ({ items, currentPage, onClickPageNumber }) => (
  <div className="pagination">
    {items.map((item, index) => (
      <Item
        key={index}
        item={item}
        currentPage={currentPage}
        onClickPageNumber={onClickPageNumber}
      />
    ))}
  </div>
);

PageNumbers.propTypes = {
  items: PropTypes.array,
  currentPage: PropTypes.number,
  onClickPageNumber: PropTypes.func,
};

export default PageNumbers;
