import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//import '../styles/components/Loading.css';

const Loading = ({ show, children, small }) => {
  if (!show) {
    return children || <div />;
  }
  return (
    <div
      className={classNames(
        'spinner',
        { 'spinner-md is-auth0': !small },
        { 'spinner-sm spinner-input': small }
      )}
    >
      <div className="circle" />
    </div>
  );
};

Loading.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node,
  small: PropTypes.bool
};

export default Loading;
