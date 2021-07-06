import React from 'react';
import PropTypes from 'prop-types';

import List from '../List/List';
import ListItem from '../List/ListItem';
import ShopCard from './ShopCard';

ShopCardList.propTypes = {
  items: PropTypes.array,
  type: PropTypes.oneOf(['category', 'product']),
  spanMax: PropTypes.number,
  isPagination: PropTypes.bool,
};

function ShopCardList({ items, type, spanMax = 4, isPagination, total, current, onPaginationChange, ...defaultProps }) {

  const paginationProps = {
    defaultPageSize: 6,
    current,
    total,
    onChange: onPaginationChange,
    hideOnSinglePage: true,
  };

  return (
    <List
      grid={{
        gutter: 24,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 2,
        xl: spanMax,
        xxl: spanMax,
      }}
      dataSource={items}
      renderItem={item => (
        <ListItem>
          <ShopCard type={type} item={item} />
        </ListItem>
      )}
      pagination={
        isPagination ? paginationProps : null
      }
      {...defaultProps}
    />
  );
}

export default ShopCardList;
