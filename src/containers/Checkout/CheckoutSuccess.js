import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { resetCart } from '../../redux/cart/cart-actions';

import Layout from '../../components/Layout/MainLayout/Layout';
import PageLayout from '../../components/Layout/PageLayout/PageLayout';
import Button from '../../components/Button/Button';

import './CheckoutSuccess.scss';

function CheckoutSuccess({ resetCart, history }) {
  useEffect(() => {
    resetCart();
  }, []);

  return (
    <Layout className="CheckoutSuccess">
      <PageLayout title="Success!">
        <div className="text-center">
          <h2>Successfully Ordered!</h2>
          <Button type="primary" onClick={() => history.push('/')}>
            Home
          </Button>
        </div>
      </PageLayout>
    </Layout>
  );
}

const mapDispatchToProps = dispatch => ({
  resetCart: () => dispatch(resetCart()),
});

export default connect(null, mapDispatchToProps)(CheckoutSuccess);

