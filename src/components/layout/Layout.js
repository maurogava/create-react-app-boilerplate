import React from 'react';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return <div>{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
