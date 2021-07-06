import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../../components/Layout/MainLayout/Layout';
import PageLayout from '../../../components/Layout/PageLayout/PageLayout';
import CallToAction from '../../../components/CallToAction/CallToAction';
import './AboutUs.scss';

AboutUs.propTypes = {
  history: PropTypes.object.isRequired,
};

function AboutUs() {
  return (
    <Layout className="AboutUs">
      <PageLayout title="About us">
        <CallToAction
          className="text-center"
          textClass="mt-6"
          actionClass="mt-8"
        >
          Mask Wabbit is a distribution company based out of Austin, Texas. We also distribute CBD
          products under the&nbsp;
          <a
            href="https://www.llamadog.life/"
            target="_blank"
            rel="noopener noreferrer"
          >
            llama dog
          </a> brand
        </CallToAction>
      </PageLayout>
    </Layout>
  );
}

export default AboutUs;
