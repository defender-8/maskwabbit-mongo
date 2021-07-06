import React, { Component } from 'react';
import { message } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { signUp } from '../../../redux/auth/auth-actions';
import {
  selectSuccessMessage,
  selectErrorMessage,
} from '../../../redux/auth/auth-selectors';

import Form from '../../../components/Form/Form';
import FormItem from '../../../components/Form/FormItem';
import Input from '../../../components/Form/Input/Input';
import InputPassword from '../../../components/Form/Input/InputPassword';
import Button from '../../../components/Button/Button';

class SignUp extends Component {
  state = {
    loading: false,
  };

  toggleLoading = () => this.setState({ loading: !this.state.loading });

  onFinish = async values => {
    this.toggleLoading();

    const { signUp } = this.props;

    await signUp(values);
    this.toggleLoading();

    const { errorMessage } = this.props;
    if (!errorMessage) {
      message.success('You are successfully signed up!');
    } else {
      message.error(errorMessage);
    }
  };

  render() {
    const { toggleSignInUp } = this.props;
    const { loading } = this.state;

    return (
      <>
        <Form
          layout="vertical"
          onFinish={this.onFinish}
        >
          <FormItem
            name="firstName"
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input />
          </FormItem>
          <FormItem
            name="lastName"
            label="lastName"
            rules={[{ required: true }]}
          >
            <Input />
          </FormItem>
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
          <FormItem
            name="confirmPassword"
            label="Confirm Password"
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
              Sign Up
            </Button>
          </FormItem>
        </Form>
        <div className="mt-2 text-center fs-125">
          <span>Already registered? Please, </span>
          <span className="text-link" onClick={toggleSignInUp}>Sign in</span>
        </div>
      </>
    );
  }
}

SignUp.propTypes = {
  toggleForms: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  signUp: (data) => dispatch(signUp(data)),
});

const mapStateToProps = createStructuredSelector({
  successMessage: selectSuccessMessage,
  errorMessage: selectErrorMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
