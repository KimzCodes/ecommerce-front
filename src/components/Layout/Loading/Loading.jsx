import LottieAnimation from "../LottieAnimation/LottieAnimation";

const Loading = ({ children, loading, error }) => {
  return (
    <>
      {loading ? (
        <LottieAnimation animationData="loading" />
      ) : error ? (
        <LottieAnimation animationData="error" />
      ) : (
        children
      )}
    </>
  );
};

export default Loading;
