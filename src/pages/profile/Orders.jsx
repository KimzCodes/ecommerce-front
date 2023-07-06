import { Link } from "react-router-dom";
import { LottieAnimation } from "../../components/Layout";

const Orders = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="mt-3 mb-3 align-self-baseline">Your Orders:</h2>
      <LottieAnimation animationData="orderEmpty" />
      <Link to="/categories">Continue Shopping</Link>
    </div>
  );
};

export default Orders;
