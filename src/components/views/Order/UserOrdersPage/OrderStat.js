import React from 'react';

export default ({ children }) => (
  <>
    <h2 className="text-center" style={{ marginTop: '50px' }}>
      Order History
    </h2>
    <div className="stat-container stat-card">{children}</div>
  </>
);
