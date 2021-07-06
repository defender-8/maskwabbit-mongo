import React from 'react';

import Modal from '../Modal/Modal';
import CartIcon from './CartModalBtn';
import Cart from './Cart';
import CartFooter from './CartModalFooter';
import './Cart.scss';

function CartModal() {
  const currentModalProps = {
    width: 760,
    title: 'Shopping cart',
    className: 'CartModal',
    footer: null,
  };

  const modalBtn = (showModal) => <CartIcon showModal={showModal} />;

  const modalContent = () => <Cart />;

  const modalCustomFooter = (handleCancel) => <CartFooter handleCancel={handleCancel} />;

  return (
    <Modal
      modalBtn={modalBtn}
      modalContent={modalContent}
      modalCustomFooter={modalCustomFooter}
      modalProps={currentModalProps}
    />
  );
}

export default CartModal;
