import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import logoDefault from '../../../assets/img/logo-only-wabbit.svg';

import Alert from '../../Alert/Alert';

PageHeader.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  className: PropTypes.string,
};

function PageHeader({ logo = logoDefault, isDataLoading, errorMessage, title, subTitle, className }) {
  return (
    <header
      className={
        classNames(classNames('PageHeader container', { [`${className}`]: className }),
          { 'with-subtitle': subTitle },
        )
      }
    >
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" className="imgResponsive" />
        </Link>
      </div>
      <div className="PageHeader-title">
        {
          errorMessage ?
            <Alert
              message="Error"
              description={errorMessage}
              type="error"
              showIcon
            /> :
            <>
              <h1>{title}</h1>
              {
                subTitle ?
                  <div className="PageHeader-subtitle">{subTitle}</div> : null
              }
            </>
        }
      </div>
    </header>
  );
}

export default PageHeader;
