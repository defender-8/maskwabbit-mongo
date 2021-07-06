import React from 'react';
import {
  DownOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCurrentUser,
} from '../../../../redux/auth/auth-selectors';

import Dropdown from '../../../Dropdown/Dropdown';
import UserMenu from '../../../Menu/UserMenu/UserMenu';
import AuthModal from '../../../../containers/Auth/AuthModal';

import './UserDropdown.scss';

function UserDropdown({ currentUser }) {

  if (currentUser) {
    return (
      <Dropdown
        overlay={
          <UserMenu className="UserMenu-volume" />
        }
        className="UserDropdown"
      >
        <div className="text-link">
          <UserOutlined /> {currentUser.firstName} <DownOutlined />
        </div>
      </Dropdown>
    );
  }

  return <AuthModal />;
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(UserDropdown);
