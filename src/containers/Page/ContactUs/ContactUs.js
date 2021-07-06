import React from 'react';

import logo from '../../../assets/img/logo-with-phone.svg';

import Layout from '../../../components/Layout/MainLayout/Layout';
import PageLayout from '../../../components/Layout/PageLayout/PageLayout';
import './ContactUs.scss';

function ContactUs() {
  return (
    <Layout className="ContactUs">
      <PageLayout logo={logo} title="Contact us">
        <h2>Contact Form </h2>
      </PageLayout>
    </Layout>
  );
}

export default ContactUs;
