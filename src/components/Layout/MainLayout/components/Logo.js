import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../../assets/img/logo.svg';

function Logo() {
  return (
    <div className="Logo">
      <Link to="/">
        <img src={logo} alt="" className="imgResponsive" />
      </Link>
    </div>
  );
}

export default Logo;
