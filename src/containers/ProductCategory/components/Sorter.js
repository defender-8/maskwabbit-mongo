import React from 'react';

import Select from '../../../components/Form/Select/Select';
import Option from '../../../components/Form/Select/Option';

function Sorter({ onChange, sorterObj }) {
  const dateDesc = { createdAt: 'desc' };
  const priceAsc = { price: 'asc' };
  const priceDesc = { price: 'desc' };
  const titleAsc = { title: 'asc' };
  const titleDesc = { title: 'desc' };

  return (
    <Select
      defaultValue={JSON.stringify(sorterObj)}
      // size="large"
      onChange={onChange}
    >
      <Option value={JSON.stringify(dateDesc)}>
        Featured
      </Option>
      <Option value={JSON.stringify(priceAsc)}>
        Price: Low to High
      </Option>
      <Option value={JSON.stringify(priceDesc)}>
        Price: High to Low
      </Option>
      <Option value={JSON.stringify(titleAsc)}>
        Title: A to Z
      </Option>
      <Option value={JSON.stringify(titleDesc)}>
        Title: Z to A
      </Option>
    </Select>
  );
}

export default Sorter;
