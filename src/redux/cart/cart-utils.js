export const addItemToCart = (cartItems, cartItemToAdd) => {
  const isCartItemExist = cartItems.find(item => item.product._id === cartItemToAdd._id);

  if (isCartItemExist) {
    return cartItems.map(item => (item.product._id === cartItemToAdd._id) ?
      {
        product: { ...item.product },
        quantity: item.quantity + 1,
      } : item);
  } else {
    return [...cartItems, { product: { ...cartItemToAdd }, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.quantity === 1) {
    return cartItems.filter(item => item.product._id !== cartItemToRemove.product._id);
  } else {
    return cartItems.map(item => (item.product._id === cartItemToRemove.product._id) ?
      {
        product: { ...item.product },
        quantity: item.quantity - 1,
      } : item);
  }
};
