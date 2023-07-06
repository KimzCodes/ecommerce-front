import { Link } from "react-router-dom";
import { LottieAnimation } from "../../components/Layout";

const Orders = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h3 className="align-self-baseline">Orders:</h3>
      <LottieAnimation animationData="orderEmpty" />
      <Link to="/categories">Continue Shopping</Link>
    </div>
  );
};

export default Orders;
