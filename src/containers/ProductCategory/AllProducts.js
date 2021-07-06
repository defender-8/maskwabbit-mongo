import React, { useState, useEffect } from 'react';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';

import { getArr } from '../../redux/product/product-actions';

import PageLayout from '../../components/Layout/PageLayout/PageLayout';
import ShopCardList from '../../components/ShopCardList/ShopCardList';
import Alert from '../../components/Alert/Alert';
import Layout from '../../components/Layout/MainLayout/Layout';
import ActionsTopPanel from './components/ActionsTopPanel';

function AllProducts() {
  const isLoading = useSelector(state => state.product.isLoading);
  const errorMessage = useSelector(state => state.product.errorMessage);
  const dataArr = useSelector(state => state.product.products);
  const total = useSelector(state => state.product.total);

  const [page, setPage] = useState({
    currentPage: 1,
    pageSize: 6,
  });
  const [searchValue, setSearchValue] = useState('');
  const [sorter, setSorter] = useState({ createdAt: 'desc' });
  const [filters, setFilters] = useState(null);

  const dispatch = useDispatch();

  const urlQueryStr = qs.stringify({
    page,
    sorter,
    filters,
    search: searchValue,
  });

  useEffect(() => {
    dispatch(getArr(`/products?${urlQueryStr}`));
  }, [page, sorter]);

  const onPaginationChange = (page, size) => {
    window.scrollTo(0, 0);

    setPage({
      currentPage: page,
      pageSize: size,
    });
  };

  const onSearchChange = (e) => {
    setPage({
      ...page,
      currentPage: 1,
    });
    setSearchValue(e.target.value);
  };

  const onSorterChange = (value) => {
    const sorterObj = JSON.parse(value);
    setSorter(sorterObj);
  };

  return (
    <Layout className="ProductCategory">
      <PageLayout title="All products">
        {
          errorMessage ?
            <Alert
              message="Error"
              description={errorMessage}
              type="error"
              showIcon
            /> :
            <>
              <ActionsTopPanel
                onSearchChange={onSearchChange}
                searchValue={searchValue}
                onSorterChange={onSorterChange}
                sorterObj={sorter}
              />
              <ShopCardList
                items={dataArr}
                loading={isLoading}
                type="product"
                spanMax={3}
                isPagination
                onPaginationChange={onPaginationChange}
                total={total}
                current={page.currentPage}
              />
            </>
        }
      </PageLayout>
    </Layout>
  );
}

export default AllProducts;
