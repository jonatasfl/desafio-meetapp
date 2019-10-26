import React from 'react';
import propTypes from 'prop-types';

import Header from './components/Header';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

MainLayout.propTypes = {
  children: propTypes.element.isRequired,
};

export default MainLayout;
