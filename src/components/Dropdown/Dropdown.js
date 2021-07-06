import React from 'react';
import { Dropdown as AntDropdown } from 'antd';

function Dropdown({ ...defaultProps }) {
  return (
    <AntDropdown
      {...defaultProps}
    />
  );
}

export default Dropdown;
