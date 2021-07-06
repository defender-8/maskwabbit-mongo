import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

PageContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

function PageContent({ children, className }) {
  return (
    <div className={classNames('PageContent', { [`${className}`]: className })}>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default PageContent;
