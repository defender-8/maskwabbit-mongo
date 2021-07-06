import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getArr } from '../../../redux/product-category/product-category-actions';

import Menu from '../Menu';
import MenuItem from '../MenuItem';

import './MainMenu.scss';

MainMenu.propTypes = {
  match: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
};

function MainMenu({ match }) {
  const dataArr = useSelector(state => state.prodCat.prodCats);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArr('/product-categories'));
  }, []);

  const renderProdCats = () => {
    return (
      dataArr.map(pc => {
        const url = `/product-categories/${pc.title}=${pc._id}`;

        return (
          <MenuItem key={url}>
            <Link to={url}>
              {pc.title}
            </Link>
          </MenuItem>
        );
      })
    );
  };

  return (
    <Menu mode="horizontal" selectedKeys={[match.url]} className="MainMenu">
      <MenuItem key="/">
        <Link to="/">
          Home
        </Link>
      </MenuItem>
      <MenuItem key="/about-us">
        <Link to="/about-us">
          About Us
        </Link>
      </MenuItem>
      {renderProdCats()}
      <MenuItem key="/bulk-orders">
        <Link to="/bulk-orders">
          Bulk orders
        </Link>
      </MenuItem>
      <MenuItem key="/contact-us">
        <Link to="/contact-us">
          Contact us
        </Link>
      </MenuItem>
    </Menu>
  );
}

export default withRouter(MainMenu);
