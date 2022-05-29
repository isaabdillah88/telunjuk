import React, { Fragment } from "react";
import Breadcrumb from "../components/tokopedia/breadcrumb/Breadcrumb";
import Header from "../components/tokopedia/header/Header";
import ProductPicture from "../components/tokopedia/picture/Picture";
import ProductDescription from "../components/tokopedia/description/Description";
import UserReview from "../components/tokopedia/review/UserReview";
import UserDiscussion from "../components/tokopedia/discussion/UserDiscussion";
import Checkout from "../components/tokopedia/checkout/Checkout";
import OtherProduct from "../components/tokopedia/other/OtherProduct";
import SponsorProduct from "../components/tokopedia/sponsor/SponsorProduct";
import Footer from "../components/tokopedia/footer/Footer";
import { Link } from "react-router-dom";

const TokopediaPage = () => {
  return (
    <Fragment>
      <div className="back-link">
        <Link to="/">Back to Homepage</Link>
      </div>
      <div className="tokopedia-page">
        <Header />
        <Breadcrumb />
        <div className="content">
          <div className="content-left">
            <div className="content-product">
              <ProductPicture />
              <ProductDescription />
            </div>
            <UserReview />
            <UserDiscussion />
          </div>
          <div className="content-right">
            <Checkout />
          </div>
        </div>
        <OtherProduct />
        <SponsorProduct />
        <Footer />
      </div>
    </Fragment>
  );
};

export default TokopediaPage;
