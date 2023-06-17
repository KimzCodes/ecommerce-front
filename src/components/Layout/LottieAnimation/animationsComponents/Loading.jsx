import Lottie from "lottie-react";
import loadingAnimation from "../../../../assets/lottie/loadingAnimation.json";

const Loading = ({ test }) => {
  console.log(test);
  return (
    <>
      <Lottie animationData={loadingAnimation} />
      <p>Please wait</p>
    </>
  );
};

export default Loading;
