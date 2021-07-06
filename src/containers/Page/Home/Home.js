import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getArr } from '../../../redux/product-category/product-category-actions';

import washingHands from '../../../assets/img/washing-hands.svg';
import mask from '../../../assets/img/mask.png';
import stayHome from '../../../assets/img/stay-home.svg';

import Spin from '../../../components/Spin/Spin';
import Alert from '../../../components/Alert/Alert';
import Layout from '../../../components/Layout/MainLayout/Layout';
import ShopCardList from '../../../components/ShopCardList/ShopCardList';
import Quote from '../../../components/Quote/Quote';
import TextImageRow from '../../../components/TextImageRow/TextImageRow';
import CallToAction from '../../../components/CallToAction/CallToAction';

import './Home.scss';

function HomePage() {
  const isLoading = useSelector(state => state.prodCat.isLoading);
  const errorMessage = useSelector(state => state.prodCat.errorMessage);
  const dataArr = useSelector(state => state.prodCat.prodCats);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArr('/product-categories'));
  }, []);

  return (
    <Layout className="Home" isLogo isSlogan>
      <section
        className="section s-product-categories container"
      >
        {
          isLoading ?
            <Spin /> :
            errorMessage ?
              <Alert
                message="Error"
                description="This data can't be reached at the moment. Please, try little later."
                type="error"
                showIcon
                className="mb-3"
              /> :
              <ShopCardList items={dataArr} type="category" />
        }
        <div className="text-center mt-2">
          <Link to="/all-products" className="section-link">
            View all staff
          </Link>
        </div>
      </section>
      <section className="section s-about container container-medium">
        <Quote author="Wabbit said" className="text-right">
          Make your hands sparkle.
        </Quote>
        <TextImageRow img={washingHands} imgSpan={6} reversed>
          “We are an Austin based distribution company that can supply all your medical supply
          needs. From gowns to gloves to masks we have it all.”
        </TextImageRow>
      </section>
      <section className="section s-featured-product container container-medium">
        <h2 className="section-title">Featured product</h2>
        <TextImageRow img={mask} imgSpan={12} align="middle">
          <CallToAction
            subTitle="Face mask w/ear loop"
            title="Market Price"
            textClass="fs-1 color-grey"
          >
            <p className="mb-4">
              These procedure face masks are ideal for control of airborne droplets containing
              pathogens. These face masks have a flexible nose piece that
              helps form a closure for better protection against exposure. Latex free and
              available
              in boxes of 50 or by the case (12 boxes per case).
            </p>
            <h3 className="h3-text color-grey mb-1">Features:</h3>
            <ul className="ul-text">
              <li>Pleated ear loop procedure masks with glass-free filter.</li>
              <li>Comfortable elastic ear loops for easy donning.</li>
              <li>Latex free.</li>
              <li>Color: Blue.</li>
              <li>Packaged 50 masks per box.</li>
              <li>One size fits most.</li>
            </ul>
          </CallToAction>
        </TextImageRow>
      </section>
      <section className="section s-stay-home container container-medium">
        <TextImageRow img={stayHome} imgSpan={6}>
          <Quote author="Wabbit said" className="text-right" textClass="mb-2">
            Stay home, have a Bag of chips..<br />
            sac<span className="ff-cursive">w</span>ifice your curves to
            f<span className="ff-cursive">w</span>atten the Curve!!!
          </Quote>
        </TextImageRow>
      </section>
    </Layout>
  );
}

export default HomePage;
