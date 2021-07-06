import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Checkout from './Checkout';
import CheckoutSuccess from './CheckoutSuccess';

function CheckoutRouter() {
  return (
    <Switch>
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/checkout/success" component={CheckoutSuccess} />
      <Redirect to="/checkout" />
    </Switch>
  );
}

export default CheckoutRouter;
