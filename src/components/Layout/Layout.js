import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import useWindowSize from './../../hooks/useWindowSize';

const Layout = ({ children }) => {
  const windowSize = useWindowSize();

  return (
    //TODO: Сделать компонент для SEO
    <div className="page">
      <Header type={windowSize.width > 768 ? 'desktop' : 'mobile'} />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
