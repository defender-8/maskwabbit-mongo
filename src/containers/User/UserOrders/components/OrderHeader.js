import React from 'react';
import moment from 'moment';

import Tag from '../../../../components/Tag/Tag';

import './OrderHeader.scss';

function OrderHeader({ number, date, status }) {
  const renderStatus = (status) => {
    let color;

    switch (status) {
      case 'In Progress':
        color = 'geekblue';
        break;
      case 'Fulfilled':
        color = 'green';
        break;
      case 'Canceled':
        color = 'volcano';
        break;
      default:
        color = 'blue';
        break;
    }

    return (
      <Tag color={color}>{status}</Tag>
    );
  };

  return (
    <div className="OrderHeader">
      <div className="OrderHeader-left">
        <div className="OrderHeader-title">
          Order #{number}
        </div>
        <div className="OrderHeader-date">
          {moment(date).format('MM/DD/YYYY')}
        </div>
      </div>
      <div className="OrderHeader-right">
        <div className="OrderHeader-status">
          {renderStatus(status)}
        </div>
      </div>
    </div>
  );
}

export default OrderHeader;
