import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { signIn } from '../../../redux/auth/auth-actions';
import {
  selectErrorMessage,
} from '../../../redux/auth/auth-selectors';

import Form from '../../../components/Form/Form';
import FormItem from '../../../components/Form/FormItem';
import Input from '../../../components/Form/Input/Input';
import InputPassword from '../../../components/Form/Input/InputPassword';
import Button from '../../../components/Button/Button';

class SignIn extends Component {
  state = {
    loading: false,
  };

  toggleLoading = () => this.setState({ loading: !this.state.loading });

  onFinish = async values => {
    this.toggleLoading();

    const { signIn } = this.props;

    await signIn(values);
    this.toggleLoading();

    const { errorMessage } = this.props;
    if (errorMessage) message.error(errorMessage);
  };

  render() {
    const { toggleSignInUp, toggleSignInPassResetEmailForm } = this.props;
    const { loading } = this.state;

    return (
      <>
        <Form
          layout="vertical"
          onFinish={this.onFinish}
        >
          <FormItem
            name="email"
            label="Email"
            rules={[{ required: true }]}
          >
            <Input />
          </FormItem>
          <FormItem
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <InputPassword />
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              block
              htmlType="submit"
              className="mt-2"
              loading={loading}
            >
              Sign In
            </Button>
          </FormItem>
        </Form>
        <div className="mt-2 text-center fs-125">
          <span>Don't have an account? Please, </span>
          <span className="text-link" onClick={toggleSignInUp}>Sign up</span>
          <div className="mt-1">
            <span
              className="text-link"
              onClick={toggleSignInPassResetEmailForm}>Forgot your password?
            </span>
          </div>
        </div>
      </>
    );
  }
}

SignIn.propTypes = {
  toggleForms: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  signIn: (data) => dispatch(signIn(data)),
});

const mapStateToProps = createStructuredSelector({
  errorMessage: selectErrorMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
