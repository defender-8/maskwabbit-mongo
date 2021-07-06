import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import './CallToAction.scss';

CallToAction.propTypes = {
  history: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  subTitle: PropTypes.string,
  subTitleClass: PropTypes.string,
  title: PropTypes.string,
  titleClass: PropTypes.string,
  img: PropTypes.string,
  imgClass: PropTypes.string,
  textClass: PropTypes.string,
  actionClass: PropTypes.string,
};

function CallToAction({ history, children, className, subTitle, subTitleClass, title, titleClass, img, imgClass, textClass, actionClass }) {
  return (
    <div className={classNames('CallToAction', { [`${className}`]: className })}>
      {
        subTitle ?
          <div className={classNames('CallToAction-subtitle',
            { [`${subTitleClass}`]: subTitleClass })}>
            {subTitle}
          </div> : null
      }
      {
        title ?
          <div className={classNames('CallToAction-title', { [`${titleClass}`]: titleClass })}>
            {title}
          </div> : null
      }
      {
        img ?
          <img src={img}
               className={classNames('CallToAction-img', { [`${imgClass}`]: imgClass })} /> : null
      }
      <div className={classNames('CallToAction-text', { [`${textClass}`]: textClass })}>
        {children}
      </div>
      <div className={classNames('CallToAction-action', { [`${actionClass}`]: actionClass })}>
        <Button type="primary" onClick={() => history.push('/contact-us')}>
          Contact us
        </Button>
      </div>
    </div>
  );
}

export default withRouter(CallToAction);
