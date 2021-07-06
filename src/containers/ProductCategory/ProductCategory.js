import React, { useState, useEffect } from 'react';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';

import { getOne } from '../../redux/product-category/product-category-actions';
import { getArr } from '../../redux/product/product-actions';

import Layout from '../../components/Layout/MainLayout/Layout';
import PageLayout from '../../components/Layout/PageLayout/PageLayout';
import ShopCardList from '../../components/ShopCardList/ShopCardList';
import Alert from '../../components/Alert/Alert';
import ActionsTopPanel from './components/ActionsTopPanel';

import './ProductCategory.scss';

function ProductCategory({ match }) {
  const { titleId } = match.params;
  const sepIndex = titleId.indexOf('=');
  const title = titleId.slice(0, sepIndex);
  const id = titleId.slice(sepIndex + 1, titleId.length);


  const isLoadingProdCat = useSelector(state => state.prodCat.isLoading);
  const errorMessageProdCat = useSelector(state => state.prodCat.errorMessage);
  const prodCat = useSelector(state => state.prodCat.prodCat);

  const isLoadingProduct = useSelector(state => state.product.isLoading);
  const errorMessageProduct = useSelector(state => state.product.errorMessage);
  const dataArr = useSelector(state => state.product.products);
  const total = useSelector(state => state.product.total);

  const [page, setPage] = useState({
    currentPage: 1,
    pageSize: 3,
  });
  const [searchValue, setSearchValue] = useState('');
  const [sorter, setSorter] = useState({ createdAt: 'desc' });
  const [filters, setFilters] = useState({ productCategory: [title] });

  const dispatch = useDispatch();

  const urlQueryStr = qs.stringify({
    page,
    sorter,
    filters,
    search: searchValue,
  });

  useEffect(() => {
    dispatch(getOne(id));
  }, [titleId]);

  useEffect(() => {
    setFilters({
      productCategory: [title],
    });
  }, [prodCat]);

  useEffect(() => {
    dispatch(getArr(`/products?${urlQueryStr}`));
  }, [page, sorter, filters]);

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
      currentPage: 6,
    });
    setSearchValue(e.target.value);
  };

  const onSorterChange = (value) => {
    const sorterObj = JSON.parse(value);
    setSorter(sorterObj);
  };

  const renderContent = () => {
    return (
      <PageLayout
        title={title}
        subTitle={prodCat ? prodCat.description : ''}
        isHeaderDataLoading={isLoadingProdCat}
        headerDataErrorMessage={errorMessageProdCat}
      >
        {
          errorMessageProduct ?
            <Alert
              message="Error"
              description={errorMessageProduct}
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
                loading={isLoadingProduct}
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
    );
  };

  return (
    <Layout className="ProductCategory">
      {renderContent()}
    </Layout>
  );
}

export default ProductCategory;
