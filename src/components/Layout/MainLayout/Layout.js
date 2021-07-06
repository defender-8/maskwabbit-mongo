import React from 'react';
import PropTypes from 'prop-types';
import { Layout as AntLayout } from 'antd';

import Header from './Header';
import Footer from './Footer';

import './Layout.scss';

const { Content } = AntLayout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isLogo: PropTypes.bool,
  isSlogan: PropTypes.bool,
};

function Layout({ children, isLogo, isSlogan, ...defaultProps }) {
  return (
    <AntLayout {...defaultProps}>
      <Header isLogo={isLogo} isSlogan={isSlogan} />
      <Content>
        {children}
      </Content>
      <Footer />
    </AntLayout>
  );
}

export default Layout;
