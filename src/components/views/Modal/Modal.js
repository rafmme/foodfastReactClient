import React from 'react';
import PropTypes from 'prop-types';

const Modal = props => {
  const { isOpened, children } = props;
  return (
    <div className="modal" style={{ display: isOpened ? 'block' : 'none' }}>
      <div className="container modal-content animate">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  isOpened: PropTypes.bool,
  children: PropTypes.object,
};

export default Modal;
