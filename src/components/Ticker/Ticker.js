import React from 'react';
import ReactTicker from 'react-ticker';

import './Ticker.scss';

function Ticker({ ...defaultProps }) {
  return (
    <ReactTicker {...defaultProps}>
      {() => (
        <span>2,000,000 gloves landed at 12.95 + shipping. 09.09.2020</span>
      )}
    </ReactTicker>
  );
}

export default Ticker;
