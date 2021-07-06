import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartItemsCount,
} from '../../redux/cart/cart-selectors';

import cartIconSvg from '../../assets/img/icons/cart.svg';

CartModalBtn.propTypes = {
  showModal: PropTypes.func,
  cartItems: PropTypes.array,
  cartItemsCount: PropTypes.number,
};

function CartModalBtn({ showModal, cartItems, cartItemsCount }) {
  return (
    <div className="CartModalBtn" onClick={showModal}>
      <img src={cartIconSvg} alt="" className="imgResponsive" />
      {
        cartItems.length ?
          <div className="CartModalBtn-count">{cartItemsCount}</div> : null
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartModalBtn);
