import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadStripe } from '@stripe/stripe-js';
import { Form, Row, Col, message } from 'antd';

import { selectCurrentUser } from '../../redux/auth/auth-selectors';
import {
  selectCartItems, selectCartItemsTotal,
} from '../../redux/cart/cart-selectors';
import { selectSession, selectErrorMessage } from '../../redux/checkout/checkout-selectors';

import { postCheckout } from '../../redux/checkout/checkout-actions';

import Layout from '../../components/Layout/MainLayout/Layout';
import PageLayout from '../../components/Layout/PageLayout/PageLayout';
import Cart from '../../components/Cart/Cart';
import FormItem from '../../components/Form/FormItem';
import Input from '../../components/Form/Input/Input';
import Button from '../../components/Button/Button';
import Alert from '../../components/Alert/Alert';
import AuthModal from '../Auth/AuthModal';

import './Checkout.scss';

const stripePromise = loadStripe(
  'pk_test_51HS2HWBJqP6DJlTVcG6kSsd76ijuit5j5DZM9yS7GDcpNhgcazkFHUC86XBI2DdscFO4acnH9vKqKzFFTB1FIhmw00Tm4UYG5q');

class Checkout extends Component {
  state = {
    loading: false,
  };

  formRef = React.createRef();

  setFieldsValueFromProps = () => {
    const { currentUser } = this.props;

    if (currentUser) {
      const { firstName, lastName, email } = currentUser;

      this.formRef.current.setFieldsValue({
        firstName,
        lastName,
        email,
      });
    }
  };

  componentDidMount() {
    this.setFieldsValueFromProps();
  }

  componentDidUpdate() {
    this.setFieldsValueFromProps();
  }

  toggleLoading = () => this.setState({ loading: !this.state.loading });

  onFinish = async () => {
    this.toggleLoading();

    const { currentUser, cartItems, cartTotal, postCheckout } = this.props;
    const values = { cartItems, cartTotal };

    const stripe = await stripePromise;

    await postCheckout(values, currentUser.token);

    const { errorMessage, session } = this.props;

    if (errorMessage) {
      message.error(errorMessage);
    }

    this.toggleLoading();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  renderForm = () => {
    const { currentUser } = this.props;
    const { loading } = this.state;

    const infoMessage = () => {
      const customModalBtn = (showModal) =>
        <div className="text-link" onClick={showModal}>
          Sign In or Sign Up
        </div>;

      return (
        <div>
          <span>To make the order please </span>
          <div className="d-inline-block">
            <AuthModal customModalBtn={customModalBtn} />
          </div>
        </div>
      );
    };

    if (currentUser) {
      return (
        <Form
          ref={this.formRef}
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
            name="firstName"
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input />
          </FormItem>
          <FormItem
            name="lastName"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input />
          </FormItem>
          <div className="text-right">
            <Button
              type="primary"
              htmlType="submit"
              className="mt-2"
              loading={loading}
            >
              Order
            </Button>
          </div>
        </Form>
      );
    }


    return (
      <Alert
        type="info"
        message={infoMessage()}
        showIcon
        className="alert-lg"
      />
    );
  };

  render() {
    return (
      <Layout className="Checkout">
        <PageLayout title="Checkout">
          <Row gutter={64}>
            <Col span={10}>
              <h2>Client Data</h2>
              {this.renderForm()}
            </Col>
            <Col span={14}>
              <h2>Your Order</h2>
              <Cart />
            </Col>
          </Row>
        </PageLayout>
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
  cartTotal: selectCartItemsTotal,
  session: selectSession,
  errorMessage: selectErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  postCheckout: (data, token) => dispatch(postCheckout(data, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
