import Lottie from "lottie-react";
import fixingBugs from "../../../assets/lottie/fixingBugs.json";
import productNotFound from "../../../assets/lottie/productNotFound.json";

import styles from "./styles.module.css";

const { message } = styles;

const messagesMapping = {
  fixing: (
    <>
      <Lottie
        animationData={fixingBugs}
        style={{ maxWidth: "500px", margin: "0 auto" }}
      />
      <p className={message}>
        We are facing technical issues, please try after sometime.
      </p>
    </>
  ),
  notFound: (
    <>
      <Lottie
        animationData={productNotFound}
        style={{ maxWidth: "500px", margin: "0 auto" }}
      />
      <p className={message}>We couldn’t find what you were looking for.</p>
    </>
  ),
};

const LottieAnimation = ({ animationData = "notFound" }) => {
  const messageLookup =
    messagesMapping[animationData] || messagesMapping["fixing"];

  return messageLookup;
};

export default LottieAnimation;
