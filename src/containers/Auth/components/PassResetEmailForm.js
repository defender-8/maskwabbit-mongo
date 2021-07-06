import React, { Component } from 'react';
import { message } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { postResetPassword } from '../../../redux/auth/auth-actions';
import {
  selectUserToResetPassId,
  selectSuccessMessage,
  selectErrorMessage,
} from '../../../redux/auth/auth-selectors';

import Form from '../../../components/Form/Form';
import FormItem from '../../../components/Form/FormItem';
import Input from '../../../components/Form/Input/Input';
import Button from '../../../components/Button/Button';

class PassResetEmailForm extends Component {
  state = {
    loading: false,
  };

  toggleLoading = () => this.setState({ loading: !this.state.loading });

  onFinish = async values => {
    this.toggleLoading();

    const { postResetPassword, handleOk } = this.props;

    await postResetPassword(values);
    this.toggleLoading();

    const { errorMessage, successMessage } = this.props;
    if (!errorMessage) {
      message.success(successMessage);
      handleOk();
    } else {
      message.error(errorMessage);
    }
  };

  render() {
    const { toggleSignInPassResetEmailForm } = this.props;
    const { loading } = this.state;

    return (
      <>
        <div className="mb-2 text-center fs-125">
          Please, enter your account email
        </div>
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
          <FormItem>
            <Button
              type="primary"
              block
              htmlType="submit"
              className="mt-2"
              loading={loading}
            >
              Send an Instruction
            </Button>
          </FormItem>
        </Form>
        <div className="mt-2 text-center fs-125">
          <span>Remembered the password? Please, </span>
          <span className="text-link" onClick={toggleSignInPassResetEmailForm}>Go back</span>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postResetPassword: (data) => dispatch(postResetPassword(data)),
});

const mapStateToProps = createStructuredSelector({
  userToResetPassId: selectUserToResetPassId,
  successMessage: selectSuccessMessage,
  errorMessage: selectErrorMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(PassResetEmailForm);
