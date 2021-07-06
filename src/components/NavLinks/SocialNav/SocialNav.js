import React from 'react';

import facebookIcon from '../../../assets/img/icons/facebook.svg';
import instagramIcon from '../../../assets/img/icons/instagram.svg';

import './SocialNav.scss';

function SocialNav() {
  return (
    <ul className="SocialNav">
      <li className="SocialNav-item">
        <a href="#" className="SocialNav-item-link">
          <div className="SocialNav-item-icon-wrapper">
            <img src={instagramIcon} alt="" className="SocialNav-item-icon" />
          </div>
          <span className="SocialNav-item-name">Instagram</span>
        </a>
      </li>
      <li className="SocialNav-item">
        <a href="#" className="SocialNav-item-link">
          <div className="SocialNav-item-icon-wrapper">
            <img src={facebookIcon} alt="" className="SocialNav-item-icon" />
          </div>
          <span className="SocialNav-item-name">Facebook</span>
        </a>
      </li>
    </ul>
  );
}

export default SocialNav;
