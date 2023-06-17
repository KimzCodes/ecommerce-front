import useGetProductsByItems from "../../../../hooks/use-get-products-by-items";
import { useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";
import { Loading, LottieAnimation } from "../../../Layout";
import styles from "./styles.module.css";

const { container, button, cartList, cartListWithScroll, cartItem } = styles;

const CartDrop = ({ close }) => {
  const navigate = useNavigate();

  const { loading, error, products, cartItemsID } = useGetProductsByItems();
  const cartListScrollStatus = !products.length
    ? cartList
    : `${cartList} ${cartListWithScroll}`;

  const navigateHandler = () => {
    close();
    navigate("shopping-cart");
  };

  const itemsList =
    products.length === 0 ? (
      <LottieAnimation animationData="cartEmptySmall" />
    ) : (
      products.map((el) => {
        const quantity = cartItemsID[el.id];

        return (
          <div className={cartItem} key={el.id}>
            <img src={el.img} alt={el.title} />
            <h2>{el.title}</h2>
            <h3>
              {el.price} EGP X {quantity}
            </h3>
          </div>
        );
      })
    );

  return (
    <div className={container} id="cartDrop">
      <Loading loading={loading} error={error}>
        <div className={cartListScrollStatus}> {itemsList}</div>
      </Loading>
      <Button className={button} variant="dark" onClick={navigateHandler}>
        Go to checkout
      </Button>
    </div>
  );
};

export default CartDrop;
