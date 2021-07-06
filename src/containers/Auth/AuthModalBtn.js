import React from 'react';
import PropTypes from 'prop-types';
import {
  UserOutlined,
} from '@ant-design/icons';

AuthModalBtn.propTypes = {
  showModal: PropTypes.func,
};

function AuthModalBtn({ showModal }) {
  return (
    <div className="Auth-modal-toggler" onClick={showModal}>
      <UserOutlined className="mr-05" />
      <span>Sign In</span>
    </div>
  );
}

export default AuthModalBtn;
