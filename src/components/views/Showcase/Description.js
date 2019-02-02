import React from 'react';

const Description = ({ history }) => (
  <>
    <h1 className="animated fadeIn bg-red" style={{ color: '#FFF', width: '250px' }}>
      Never get hungry
    </h1>
    <button type="button" id="showcase-btn" onClick={() => history.push('/login')}>
      Get Started!
    </button>
  </>
);

export default Description;
