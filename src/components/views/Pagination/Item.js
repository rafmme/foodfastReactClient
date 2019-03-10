/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

/* istanbul ignore next */
const Item = ({ item, currentPage, onClickPageNumber }) => (
  <li onClick={() => onClickPageNumber(item)} style={{ listStyle: 'none' }}>
    {item === currentPage ? (
      <a className="active" href="#">
        {`Page ${item + 1}`}
      </a>
    ) : (
      <a href="#">{item + 1}</a>
    )}
  </li>
);

Item.propTypes = {
  item: PropTypes.number,
  currentPage: PropTypes.number,
  onClickPageNumber: PropTypes.func,
};

export default Item;
