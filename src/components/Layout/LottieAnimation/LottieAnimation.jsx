import Lottie from "lottie-react";
import fixingBugs from "../../../assets/lottie/fixingBugs.json";
import productNotFound from "../../../assets/lottie/productNotFound.json";
import loadingAnimation from "../../../assets/lottie/loadingAnimation.json";
import connectionError from "../../../assets/lottie/connectionError.json";
import shoppingCartEmpty from "../../../assets/lottie/emptyBox.json";
import errorPage from "../../../assets/lottie/errorPage.json";

import styles from "./styles.module.css";

const { container, lottieDefault, lottieLarge, lottieSmall } = styles;

const messagesMapping = {
  fixing: (
    <>
      <Lottie animationData={fixingBugs} className={lottieDefault} />
      <p>We are facing technical issues, please try after sometime.</p>
    </>
  ),
  notFound: (
    <>
      <Lottie
        animationData={productNotFound}
        className={lottieDefault}
        style={{ margin: 0 }}
      />
      <p>We couldn’t find what you were looking for.</p>
    </>
  ),
  loading: (
    <>
      <Lottie animationData={loadingAnimation} className={lottieDefault} />
    </>
  ),
  serverError: (
    <>
      <Lottie animationData={connectionError} className={lottieDefault} />
      <p style={{ color: "red" }}>OOPs! Something went wrong.</p>
    </>
  ),
  orderEmpty: (
    <>
      <Lottie className={lottieLarge} animationData={shoppingCartEmpty} />
      <p>You have no previous orders</p>
    </>
  ),
  cartEmptyLarge: (
    <>
      <Lottie className={lottieLarge} animationData={shoppingCartEmpty} />
      <p>Your shopping cart looks empty</p>
    </>
  ),
  cartEmptySmall: (
    <>
      <Lottie className={lottieSmall} animationData={shoppingCartEmpty} />
      <p>Your shopping cart looks empty</p>
    </>
  ),
  errorPage: (
    <Lottie
      animationData={errorPage}
      className={lottieDefault}
      style={{ margin: 0 }}
    />
  ),
};

const LottieAnimation = ({ animationData = "notFound" }) => {
  const messageLookup =
    messagesMapping[animationData] || messagesMapping["fixing"];

  return <div className={container}>{messageLookup}</div>;
};

export default LottieAnimation;
