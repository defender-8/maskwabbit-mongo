import React from 'react';
import classNames from 'classnames';
import { withRouter, Link } from 'react-router-dom';
import {
  ProfileOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { connect } from 'react-redux';

import { logOut } from '../../../redux/auth/auth-actions';

import Menu from '../Menu';
import MenuItem from '../MenuItem';

import './UserMenu.scss';

function UserMenu({ logOut, className, match }) {
  return (
    <Menu
      selectedKeys={[match.url]}
      className={classNames('UserMenu',
        {
          [`${className}`]: className,
        },
      )}
    >
      <MenuItem key="/profile">
        <ProfileOutlined />
        <Link to="/profile" className="d-inline-block">
          Personal Data
        </Link>
      </MenuItem>
      <MenuItem key="/profile/orders">
        <ShoppingCartOutlined />
        <Link to="/profile/orders" className="d-inline-block">
          Orders
        </Link>
      </MenuItem>
      <MenuItem key="/logout" className="color-danger" onClick={logOut}>
        <LogoutOutlined />
        Logout
      </MenuItem>
    </Menu>
  );
}

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
});

export default withRouter(connect(null, mapDispatchToProps)(UserMenu));
