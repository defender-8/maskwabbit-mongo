import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem, clearItem } from '../../../redux/cart/cart-actions';

import './CartItem.scss';

function CartItem({ item, addItem, removeItem, clearItem }) {
  const { title, image, price } = item.product;
  const { quantity } = item;

  return (
    <div className="CartItem">
      <div className="CartItem-img-wr">
        <img src={image} alt="" className="CartItem-img" />
      </div>
      <div className="CartItem-nq">
        <div className="CartItem-name">
          {title}
        </div>
        <div className="CartItem-quantity-wr">
          <div className="CartItem-quantity-action-wr">
            <div className="CartItem-quantity-action" onClick={() => removeItem(item)}>
              -
            </div>
          </div>
          <div className="CartItem-quantity">
            {quantity}
          </div>
          <div className="CartItem-quantity-action-wr">
            <div className="CartItem-quantity-action" onClick={() => addItem(item.product)}>
              +
            </div>
          </div>
          <div className="CartItem-remove" onClick={() => clearItem(item)}>
            &#10005;
          </div>
        </div>
      </div>
      <div className="CartItem-price">
        ${price.toFixed(2)}
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearItem: item => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
