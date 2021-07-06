import React from 'react';

import SiderLayout from '../../components/Layout/SiderLayout/SiderLayout';
import UserMenu from '../../components/Menu/UserMenu/UserMenu';

import './UserLayout.scss';

function UserLayout({ children }) {
  return (
    <SiderLayout
      siderContent={<UserMenu className="UserMenu-flat" />}
    >
      {children}
    </SiderLayout>
  );
}

export default UserLayout;
