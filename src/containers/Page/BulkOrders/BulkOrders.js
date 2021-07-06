import React from 'react';

import bulkOrdersImg from '../../../assets/img/bulk-orders.jpg';

import Layout from '../../../components/Layout/MainLayout/Layout';
import PageLayout from '../../../components/Layout/PageLayout/PageLayout';
import CallToAction from '../../../components/CallToAction/CallToAction';
import './BulkOrders.scss';

function BulkOrders() {
  return (
    <Layout className="BulkOrders">
      <PageLayout title="Bulk orders">
        <CallToAction
          className="text-center"
          img={bulkOrdersImg}
          textClass="mt-6 mb-7"
          actionClass="mb-8"
        >
          We have an extensive supply network all over the world and can fulfill orders both
          large
          and small.
        </CallToAction>
      </PageLayout>
    </Layout>
  );
}

export default BulkOrders;
