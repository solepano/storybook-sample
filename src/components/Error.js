import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Button } from 'react-bootstrap';

const Error = ({ children, message, onRetry }) => {
  if (!message) {
    return children || <div />;
  }

  return (
    <Alert bsStyle="danger">
      <h4>Oh snap! You got an error!</h4>
      <p>
        {message}
      </p>
      {onRetry &&
        <p>
          <Button bsStyle="danger" onClick={onRetry}>
            <i className="icon-budicon-256" />&nbsp;Retry
          </Button>
        </p>}
    </Alert>
  );
};

Error.propTypes = {
  children: PropTypes.node,
  message: PropTypes.string,
  onRetry: PropTypes.func
};

export default Error;
