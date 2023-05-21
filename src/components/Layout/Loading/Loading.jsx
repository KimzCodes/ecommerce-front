import Lottie from "lottie-react";
import loadingAnimation from "../../../assets/lottie/loadingAnimation.json";
import connectionError from "../../../assets/lottie/connectionError.json";
import styles from "./styles.module.css";

const { lottieAnimation } = styles;

const Loading = ({ children, loading, error }) => {
  return (
    <>
      {loading ? (
        <div className={lottieAnimation}>
          <Lottie animationData={loadingAnimation} loop={true} />
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
