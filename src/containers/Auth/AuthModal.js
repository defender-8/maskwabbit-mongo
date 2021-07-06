import React, { useState } from 'react';

import Modal from '../../components/Modal/Modal';
import AuthModalBtn from './AuthModalBtn';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PassResetEmailForm from './components/PassResetEmailForm';

import './Auth.scss';

function AuthModal({ customModalBtn }) {
  const currentModalProps = {
    width: 760,
    title: 'Sign In',
    className: 'Auth',
    footer: null,
  };

  const [showSignIn, setShowSignIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showPassResetEmailForm, setShowPassResetEmailForm] = useState(false);

  const toggleSignInUp = () => {
    setShowSignIn(showSignIn => !showSignIn);
    setShowSignUp(showSignUp => !showSignUp);
  };

  const toggleSignInPassResetEmailForm = () => {
    setShowSignIn(showSignIn => !showSignIn);
    setShowPassResetEmailForm(setShowPassResetEmailForm => !setShowPassResetEmailForm);
  };

  const modalBtn = (showModal) => {
    if (!customModalBtn) {
      return <AuthModalBtn showModal={showModal} />;
    }

    return customModalBtn(showModal);
  };

  const modalContent = (handleOk) => {
    return (
      showSignIn ?
        <SignIn
          toggleSignInUp={toggleSignInUp}
          toggleSignInPassResetEmailForm={toggleSignInPassResetEmailForm}
        /> :
        showPassResetEmailForm ?
          <PassResetEmailForm
            toggleSignInPassResetEmailForm={toggleSignInPassResetEmailForm}
            handleOk={handleOk}
          /> :
          <SignUp toggleSignInUp={toggleSignInUp} />
    );
  };

  return (
    <Modal
      modalBtn={modalBtn}
      modalContent={modalContent}
      modalProps={currentModalProps}
    />
  );
}

export default AuthModal;
