import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartItemsTotal,
} from '../../redux/cart/cart-selectors';

import Empty from '../Empty/Empty';
import { Empty as AntEmpty } from 'antd';
import CartItem from './CartItem/CartItem';
import './Cart.scss';

Cart.propTypes = {
  cartItems: PropTypes.array,
  cartItemsTotal: PropTypes.number,
};

function Cart({ cartItems, cartItemsTotal }) {
  return (
    <div className="Cart">
      {
        cartItems.length ?
          cartItems.map(item => <CartItem key={item.product._id} item={item} />) :
          <Empty
            description="Your cart is empty"
            image={AntEmpty.PRESENTED_IMAGE_SIMPLE}
          />
      }
      {
        cartItems.length ?
          <div className="Cart-total">
            <div className="Cart-total-name">
              Total:
            </div>
            <div className="Cart-total-sum">
              ${(cartItemsTotal.toFixed(2))}
            </div>
          </div> : null
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotal: selectCartItemsTotal,
});

export default connect(mapStateToProps)(Cart);
