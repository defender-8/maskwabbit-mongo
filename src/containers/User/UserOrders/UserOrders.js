import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getArr } from '../../../redux/order/order-actions';

import Layout from '../../../components/Layout/MainLayout/Layout';
import PageLayout from '../../../components/Layout/PageLayout/PageLayout';
import UserLayout from '../UserLayout';
import Alert from '../../../components/Alert/Alert';
import Spin from '../../../components/Spin/Spin';
import Collapse from '../../../components/Collapse/Collapse';
import Panel from '../../../components/Collapse/Panel';
import Pagination from '../../../components/Pagination/Pagination';
import OrderHeader from './components/OrderHeader';
import OrderProdItem from './components/OrderProdItem';
import Empty from '../../../components/Empty/Empty';
import { Empty as AntEmpty } from 'antd';

function UserOrders() {
  const [offset, setOffset] = useState(0);
  const [currentPageElements, setCurrentPageElements] = useState([]);
  const [elementsPerPage, setElementsPerPage] = useState(5);
  const [pagesCount, setPagesCount] = useState(1);
  const [totalElementsCount, setTotalElementsCount] = useState(0);

  const currentUser = useSelector(state => state.auth.currentUser);
  const isLoading = useSelector(state => state.order.isLoading);
  const errorMessage = useSelector(state => state.order.errorMessage);
  const dataArr = useSelector(state => state.order.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArr(`/orders/${currentUser._id}`, currentUser.token));
  }, []);

  useEffect(() => {
    setTotalElementsCount(dataArr.length);
  }, [dataArr]);

  useEffect(() => {
    setPagesCount(Math.ceil(totalElementsCount / elementsPerPage));
  }, [totalElementsCount]);

  const handlePageClick = (pageNumber) => {
    const currentPage = pageNumber - 1;
    const offset = currentPage * elementsPerPage;
    setOffset(offset);
  };

  useEffect(() => {
    const currentPageElements = dataArr.slice(offset, offset + elementsPerPage);
    setCurrentPageElements(currentPageElements);
  }, [pagesCount, offset]);

  const renderProducts = (products) => {
    return (
      products.map(prod => {
        const { product, quantity } = prod;
        const { image, title, price, _id } = product;

        return (
          <OrderProdItem
            image={image}
            title={title}
            price={price}
            quantity={quantity}
            prodId={_id}
            key={_id}
          />
        );
      })
    );
  };

  const renderData = () => {
    if (currentPageElements.length) {
      return (
        <Collapse bordered={false}>
          {
            currentPageElements.map(order => {
              const { _id, number, createdAt, status, products, total } = order;

              return (
                <Panel
                  header={
                    <OrderHeader number={number} date={createdAt} status={status} />
                  }
                  key={_id}
                >
                  <div className="text-right fw-700 fs-1125 mb-2">Total: {`$${total.toFixed(2)}`}</div>
                  {renderProducts(products)}
                </Panel>
              );
            })
          }
        </Collapse>
      );
    }

    return (
      <Empty
        description="No Orders Yet"
        image={AntEmpty.PRESENTED_IMAGE_SIMPLE}
      />
    );
  };

  const renderPagination = () => {
    return (
      pagesCount > 1 &&
      <Pagination
        defaultCurrent={1}
        onChange={handlePageClick}
        total={totalElementsCount}
        // showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        pageSize={elementsPerPage}
        showSizeChanger={false}
        className="mt-4 text-right"
      />
    );
  };


  return (
    <Layout className="UserOrders">
      <PageLayout title="My Orders">
        <UserLayout>
          {
            errorMessage ?
              <Alert
                message="Error"
                description={errorMessage}
                type="error"
                showIcon
              /> :
              isLoading ?
                <Spin /> :
                <>
                  {renderData()}
                  {renderPagination()}
                </>
          }
        </UserLayout>
      </PageLayout>
    </Layout>
  );
}

export default UserOrders;
