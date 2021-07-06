import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-actions';

import Button from '../Button/Button';
import './ShopCard.scss';

ShopCard.propTypes = {
  history: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['category', 'product']),
  name: PropTypes.string,
  img: PropTypes.object,
  price: PropTypes.number,
  addItem: PropTypes.func,
};

function ShopCard({ history, type, item, addItem }) {
  const { title, price, image, amount } = item;

  return (
    (type === 'category') ?
      <div className="ShopCard ShopCard-category">
        <div className="ShopCard-text">{title}</div>
        <img src={`/${image}`} className="ShopCard-img" alt="" />
        <Button
          type="primary"
          className="ShopCard-btn"
          onClick={() => history.push(`/product-categories/${item.title}=${item._id}`)}
        >
          Shop now
        </Button>
      </div> :
      (type === 'product') ?
        <div className={classNames('ShopCard ShopCard-product', {
          'opacity-05': !amount,
        })}>
          <div className="ShopCard-price-wr">
            <div className="ShopCard-price">
              {`$${price.toFixed(2)}`}
            </div>
            {
              !amount ?
                <div className="ShopCard-not-available">
                  Not Available
                </div> : null
            }
          </div>
          <img src={`/${image}`} className="ShopCard-img" alt="" />
          <div className="ShopCard-text">{title}</div>
          {
            amount ?
              <Button
                type="primary"
                className="ShopCard-btn"
                onClick={() => addItem(item)}
              >
                Add to cart
              </Button> : null
          }
        </div> : null
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(ShopCard));
