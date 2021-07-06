import React from 'react';
import { Alert as AntAlert } from 'antd';

import './Alert.scss';

function Alert({ ...defaultProps }) {
  return (
    <AntAlert
      {...defaultProps}
    />
  );
}

export default Alert;
