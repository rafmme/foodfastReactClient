import React from 'react';
import AuthHelper from '../../../helpers/AuthHelper';

const Description = ({ history }) => (
  <>
    <h1 className="animated fadeIn bg-red" style={{ color: '#FFF', width: '250px' }}>
      Never get hungry
    </h1>
    {!AuthHelper.checkUserIsAuthenticated(localStorage.userAuthToken) && (
      <button type="button" id="showcase-btn" onClick={() => history.push('/signup')}>
        Get Started!
      </button>
    )}
  </>
);

export default Description;
