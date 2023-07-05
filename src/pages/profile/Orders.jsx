import { Link } from "react-router-dom";
import { LottieAnimation } from "../../components/Layout";

const Orders = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <LottieAnimation animationData="orderEmpty" />
      <Link to="/categories">Continue Shopping</Link>
    </div>
  );
};

export default Orders;
