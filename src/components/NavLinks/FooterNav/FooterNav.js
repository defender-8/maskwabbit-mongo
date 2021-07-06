import React from 'react';
import { Link } from 'react-router-dom';

import './FooterNav.scss';

function FooterNav() {
  return (
    <ul className="FooterNav">
      <li className="FooterNav-item">
        <Link to="/masks" className="FooterNav-link">
          Masks
        </Link>
      </li>
      <li className="FooterNav-item">
        <Link to="/contact-us" className="FooterNav-link">
          Contact
        </Link>
      </li>
      <li className="FooterNav-item">
        <Link to="/bulk-orders" className="FooterNav-link">
          Bulk orders
        </Link>
      </li>
    </ul>
  );
}

export default FooterNav;
