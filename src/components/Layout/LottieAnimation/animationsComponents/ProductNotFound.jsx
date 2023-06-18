import Lottie from "lottie-react";
import productNotFound from "../../../../assets/lottie/productNotFound.json";

function ProductNotFound() {
  return (
    <>
      <Lottie animationData={productNotFound} style={{ margin: 0 }} />
      <p>We couldn’t find what you were looking for.</p>
    </>
  );
}

export default ProductNotFound;
