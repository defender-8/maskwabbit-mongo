import React, { Component } from 'react';
import { message } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { postNewPassword } from '../../../redux/auth/auth-actions';
import {
  selectUserToResetPassId,
  selectSuccessMessage,
  selectErrorMessage,
} from '../../../redux/auth/auth-selectors';

import Layout from '../../../components/Layout/MainLayout/Layout';
import PageLayout from '../../../components/Layout/PageLayout/PageLayout';
import Form from '../../../components/Form/Form';
import FormItem from '../../../components/Form/FormItem';
import InputPassword from '../../../components/Form/Input/InputPassword';
import Button from '../../../components/Button/Button';

import './PassResetPassForm.scss';

class PassResetPassForm extends Component {
  state = {
    loading: false,
  };

  toggleLoading = () => this.setState({ loading: !this.state.loading });

  onFinish = async values => {
    this.toggleLoading();

    const { postNewPassword, userToResetPassId, match, history } = this.props;
    values.userId = userToResetPassId;

    await postNewPassword(`/password-reset/${match.params.token}`, values);
    this.toggleLoading();

    const { errorMessage, successMessage } = this.props;
    if (!errorMessage) {
      message.success(successMessage);
      history.replace('/');
    } else {
      message.error(errorMessage);
    }
  };

  render() {
    const { loading } = this.state;

    return (
      <Layout className="PassResetPassForm">
        <PageLayout title="Profile">
          <div className="mt-2 text-center">
            Please, enter new password
          </div>
          <Form
            layout="vertical"
            onFinish={this.onFinish}
          >
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
                Save
              </Button>
            </FormItem>
          </Form>
        </PageLayout>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postNewPassword: (endpoint, data) => dispatch(postNewPassword(endpoint, data)),
});

const mapStateToProps = createStructuredSelector({
  userToResetPassId: selectUserToResetPassId,
  successMessage: selectSuccessMessage,
  errorMessage: selectErrorMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(PassResetPassForm);
