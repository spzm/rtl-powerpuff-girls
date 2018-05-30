import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Logger from '../../services/logger';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });

    // Place to update Logger to use json logs instead of stringify
    // Wasn't add to simplify
    Logger.error(`${error} ${JSON.stringify(info)}`);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorBoundary;
