import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PassResetPassForm from '../Auth/components/PassResetPassForm';
import HomePage from '../Page/Home/Home';
import AboutUs from '../Page/AboutUs/AboutUs';
import BulkOrders from '../Page/BulkOrders/BulkOrders';
import ContactUs from '../Page/ContactUs/ContactUs';
import ProductCategory from '../ProductCategory/ProductCategory';
import AllProducts from '../ProductCategory/AllProducts';
import UserRouter from '../User/UserRouter';
import CheckoutRouter from '../Checkout/CheckoutRouter';

function Router() {
  return (
    <Switch>
      <Route exact path="/auth/password-reset/:token" component={PassResetPassForm} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/product-categories/:titleId" component={ProductCategory} />
      <Route exact path="/all-products" component={AllProducts} />
      <Route exact path="/bulk-orders" component={BulkOrders} />
      <Route exact path="/contact-us" component={ContactUs} />
      <Route path="/checkout" component={CheckoutRouter} />
      <Route path="/profile" component={UserRouter} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Router;
