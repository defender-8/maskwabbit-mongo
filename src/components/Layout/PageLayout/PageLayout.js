import React from 'react';
import PropTypes from 'prop-types';

import PageHeader from './PageHeader';
import PageContent from './PageContent';

import './PageLayout.scss';

PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  pageContentClass: PropTypes.string,
  pageHeaderClass: PropTypes.string,
};

function PageLayout({ children, isHeaderDataLoading, headerDataErrorMessage, pageContentClass, pageHeaderClass, ...otherHeaderProps }) {
  return (
    <>
      <PageHeader
        className={pageHeaderClass}
        isDataLoading={isHeaderDataLoading}
        errorMessage={headerDataErrorMessage}
        {...otherHeaderProps}
      />
      <PageContent className={pageContentClass}>
        {children}
      </PageContent>
    </>
  );
}

export default PageLayout;
