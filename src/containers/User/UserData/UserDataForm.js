import React, { Component } from 'react';
import classNames from 'classnames';
import { Form, message } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../../redux/auth/auth-selectors';
import {
  selectLoading,
  selectUser,
  selectSuccessMessage,
  selectErrorMessage,
} from '../../../redux/client/client-selectors';
import { getOne, put } from '../../../redux/client/client-actions';

import Layout from '../../../components/Layout/MainLayout/Layout';
import PageLayout from '../../../components/Layout/PageLayout/PageLayout';
import UserLayout from '../UserLayout';
import Alert from '../../../components/Alert/Alert';
import Spin from '../../../components/Spin/Spin';
import FormItem from '../../../components/Form/FormItem';
import Input from '../../../components/Form/Input/Input';
import Button from '../../../components/Button/Button';
import ChangePassModal from './components/ChangePassModal';

class UserDataForm extends Component {
  state = {
    errMess: false,
    isSpinHidden: false,
  };

  formRef = React.createRef();

  async componentDidMount() {
    const { currentUser, getOne, match, history } = this.props;
    if (currentUser) {
      await getOne(currentUser._id, currentUser.token);
      this.setFormFieldsValueFromProps();
    } else {
      message.error('Access is not allowed! Please, Sign in');
      history.replace('/');
    }
  }

  setFormFieldsValueFromProps = () => {
    const { user } = this.props;

    if (user) {
      const { firstName, lastName, email } = user;

      this.formRef.current.setFieldsValue({
        firstName,
        lastName,
        email,
      });
    }
  };

  setFormFieldsValueFromValues = (values) => {
    this.formRef.current.setFieldsValue({
      ...values,
    });
  };

  onFinishMessage = (sucCb, errCb) => {
    const { errorMessage, successMessage } = this.props;

    if (successMessage) {
      message.success(successMessage);
      if (sucCb) sucCb();
    } else {
      this.setState({ errMess: true }, () => {
        message.error(errorMessage);
        if (errCb) errCb();
      });
    }
  };

  onFinish = async (values) => {
    const { currentUser, put } = this.props;

    await put(currentUser._id, values, currentUser.token);

    this.setFormFieldsValueFromValues(values);
    this.onFinishMessage();
  };

  handleSave = () => this.setState({ isSpinHidden: true });

  renderForm = () => {
    const { isLoading, user, errorMessage } = this.props;
    const { errMess } = this.state;

    return (
      <Form
        ref={this.formRef}
        layout="vertical"
        onFinish={this.onFinish}
        className={classNames({ 'd-none': (errorMessage && !errMess) })}
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
        <ChangePassModal
          setFormFieldsValue={this.setFormFieldsValueFromProps}
          onFinishMessage={this.onFinishMessage}
          user={user}
        />
        <FormItem>
          <div className="text-center">
            <Button
              type="primary"
              htmlType="submit"
              className="mt-2"
              loading={isLoading}
              onClick={this.handleSave}
            >
              Save
            </Button>
          </div>
        </FormItem>
      </Form>
    );
  };

  render() {
    const { isLoading, errorMessage } = this.props;
    const { errMess, isSpinHidden } = this.state;

    return (
      <Layout className="UserDataForm">
        <PageLayout title="Personal Data">
          <UserLayout>
            {
              (errorMessage && !errMess) ?
                <Alert
                  message="Error"
                  description={errorMessage}
                  type="error"
                  showIcon
                /> : null
            }
            {
              (isLoading && !isSpinHidden) ?
                <Spin /> : this.renderForm()
            }
          </UserLayout>
        </PageLayout>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getOne: (id, token) => dispatch(getOne(id, token)),
  put: (id, data, token) => dispatch(put(id, data, token)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isLoading: selectLoading,
  user: selectUser,
  successMessage: selectSuccessMessage,
  errorMessage: selectErrorMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDataForm);
