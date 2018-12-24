import React from 'react';
import PropTypes from 'prop-types';
import { getNameInitials } from '../utils/validate';
import style from './NameAvatar.css';

const NameAvatar = ({ fullname }) => (
  <div className={style.tooltip}>
    <span className={style.initialsSpan}>
      <i className="fa fa-user"> {getNameInitials(fullname)} </i>
    </span>
    <span className={style.tooltiptext}>{fullname}</span>
  </div>
);

NameAvatar.propTypes = {
  fullname: PropTypes.string.isRequired,
};

export default NameAvatar;
