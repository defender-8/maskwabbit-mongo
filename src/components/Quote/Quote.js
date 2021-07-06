import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Quote.scss';

Quote.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  author: PropTypes.string,
  className: PropTypes.string,
  textClass: PropTypes.string,
}

function Quote({ children, author, className, textClass }) {
  return (
    <blockquote className={classNames('Quote', { [`${className}`]: className })}>
      <div className={classNames('Quote-text', { [`${textClass}`]: textClass })}>
        {children}
      </div>
      <div className="Quote-author">
        {author}
      </div>
    </blockquote>
  );
}

export default Quote;
