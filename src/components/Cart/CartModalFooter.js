import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
} from '../../redux/cart/cart-selectors';

import Button from '../Button/Button';

CartModalFooter.propTypes = {
  handleCancel: PropTypes.func,
  history: PropTypes.object.isRequired,
  cartItems: PropTypes.array,
};

function CartModalFooter({ cartItems, history, handleCancel }) {
  return (
    <div className={classNames('CartModalFooter', { withCartItems: cartItems.length })}>
      {
        cartItems.length ?
          <>
            <Button type="link" onClick={handleCancel}>
              Сontinue shopping
            </Button>
            <Button type="primary" onClick={() => history.push('/checkout')}>
              Checkout
            </Button>
          </> :
          <Button type="link" onClick={handleCancel}>
            Сontinue shopping
          </Button>
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartModalFooter));
