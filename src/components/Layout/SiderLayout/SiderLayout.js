import React from 'react';

import './SiderLayout.scss'

function SiderLayout({ children, siderContent }) {
  return (
    <div className="SiderLayout">
      <div className="SiderLayout-sider">
        {siderContent}
      </div>
      <div className="SiderLayout-content">
        {children}
      </div>
    </div>
  );
}

export default SiderLayout;
