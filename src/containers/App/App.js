import React, { Component } from 'react';

import { auth, createUserProfileDocument } from '../../utils/firebase';
import { connect } from 'react-redux';
// import { setCurrentUser } from '../../redux/_user/user-actions';

import Router from './Router';

class App extends Component {
  // unsubscribeFromAuth = null;

  /*componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }*/

  /*componentWillUnmount() {
    this.unsubscribeFromAuth();
  }*/

  render() {
    return (
      <Router />
    );
  }
}

/*const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});*/

// export default connect(null, mapDispatchToProps)(App);
export default App;
