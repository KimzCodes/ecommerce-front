import Lottie from "lottie-react";
import shoppingCart from "../../../assets/lottie/shoppingCart.json";
import connectionError from "../../../assets/lottie/connectionError.json";
import styles from "./styles.module.css";

const Loading = ({ children, loading, error }) => {
  const { lottieAnimation } = styles;
  return (
    <>
      {loading ? (
        <div className={lottieAnimation}>
          <Lottie animationData={shoppingCart} loop={true} />
        </div>
      ) : error ? (
        <div className={lottieAnimation}>
          <Lottie animationData={connectionError} loop={true} />
          <h2>OOPs! Something went wrong</h2>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;
