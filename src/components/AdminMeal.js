/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AdminMeal = ({ mealData }) => {
  const { id, imageUrl, title, description, price } = mealData;
  return (
    <div key={id} className="meal-card adm-card text-left" onDoubleClick={e => e.preventDefault()}>
      <div className="img-frame">
        <img src={imageUrl} alt="Avatar" style={{ width: '100%' }} />
      </div>
      <div role="menu" className="icon-div" onClick={e => e.preventDefault()}>
        <i className="fa fa-ellipsis-v text-primary-green" style={{ fontSize: '1.5em' }} />
      </div>
      <ul className="hide">
        <li>
          <Link to="null" className="bg-green" onClick={e => e.preventDefault()}>
            <i className="fa fa-edit" />
            Edit
          </Link>
        </li>
        <li>
          <Link to="null" className="bg-red" onClick={e => e.preventDefault()}>
            <i className="fa fa-trash-o" />
            Delete
          </Link>
        </li>
      </ul>
      <div className="container">
        <h4 className="foodname-mg">
          <b>{title.slice(0, 19)}</b>
        </h4>
        <p className="min-p">{description}</p>
        <p className="price">₦ {price}</p>
      </div>
    </div>
  );
};

AdminMeal.propTypes = {
  mealData: PropTypes.object.isRequired,
};

export default AdminMeal;
