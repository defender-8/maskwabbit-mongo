import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout as AntLayout, Row, Col } from 'antd';

import wabbitCalls from '../../../assets/img/calling.svg';

import FooterNav from '../../NavLinks/FooterNav/FooterNav';
import SocialNav from '../../NavLinks/SocialNav/SocialNav';
import Button from '../../Button/Button';

const { Footer: AntFooter } = AntLayout;

Footer.propTypes = {
  history: PropTypes.object.isRequired,
};

function Footer({ history }) {
  return (
    <AntFooter>
      <div className="container">
        <Row>
          <Col xs={24} lg={14} xl={16}>
            <Row>
              <Col xs={12} xl={6}>
                <FooterNav />
              </Col>
              <Col xs={12} xl={6}>
                <SocialNav />
              </Col>
              <Col xs={24} xl={12}>
                <div className="button-wrapper">
                  <Button type="primary" block onClick={() => history.push('/contact-us')}>
                    Contact us
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={24} lg={10} xl={8} className="text-right text-center-md head">
            <a href="tel:+15128776102" className="phone-number">+1 512 877 6102</a>
            <img src={wabbitCalls} alt="" className="main-footer-img" />
          </Col>
        </Row>
        <div className="main-footer-copyright">
          Copyright © 2020 Maskwabbit Inc. All wights weserved.
        </div>
      </div>
    </AntFooter>
  );
}

export default withRouter(Footer);
