import Lottie from "lottie-react";
import connectionError from "../../../../assets/lottie/connectionError.json";

function ServerError({ test }) {
  console.log(test);
  return (
    <>
      <Lottie animationData={connectionError} />
      <p style={{ color: "red" }}>OOPs! Something went wrong.</p>
    </>
  );
}

export default ServerError;
