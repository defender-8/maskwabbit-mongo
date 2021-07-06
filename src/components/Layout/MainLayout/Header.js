import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout as AntLayout } from 'antd';

import Ticker from '../../Ticker/Ticker';
import MainNav from '../../Menu/MainMenu/MainMenu';
import UserDropdown from './components/UserDropdown';
import Logo from './components/Logo';
import Slogan from './components/Slogan';
import CartModal from '../../Cart/CartModal';

const { Header: AntHeader } = AntLayout;

Header.propTypes = {
  isLogo: PropTypes.bool,
  isSlogan: PropTypes.bool,
};

function Header({ isLogo, isSlogan, match }) {
  return (
    <AntHeader>
      <Ticker mode="smooth" offset="run-in" height={54} />
      <div className="container pos-relative">
        {
          isLogo ? <Logo /> : null
        }
        <MainNav />
        <div className="user-container">
          <UserDropdown />
          {
            (match.url !== '/checkout') ?
              <CartModal /> : null
          }
        </div>
        {
          isSlogan ? <Slogan /> : null
        }
      </div>
    </AntHeader>
  );
}

export default withRouter(Header);
