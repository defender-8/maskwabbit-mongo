import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCurrentUser,
} from '../../redux/auth/auth-selectors';

import UserDataForm from './UserData/UserDataForm';
import UserOrders from './UserOrders/UserOrders';

function UserRouter({ currentUser }) {
  const protectedRoute = (path, component) => {
    return (
      (!currentUser || currentUser.role !== 'client') ?
        <Route
          exact
          path={path}
          render={() => <Redirect to="/" />}
        /> :
        <Route exact path={path} component={component} />
    );
  };

  return (
    <Switch>
      {protectedRoute('/profile', UserDataForm)}
      {protectedRoute('/profile/orders', UserOrders)}
      <Redirect to="/profile" />
    </Switch>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(UserRouter);
