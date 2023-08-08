import { useSelector } from "react-redux";
import { cartTotalQuantity } from "../../../../store/cartSlice";
import shoppingCartImg from "../../../../assets/shopping-cart.svg";
import styles from "./styles.module.css";

const { shoppingCart, shoppingCartCounter } = styles;

const CartHeaderIcon = () => {
  const totalQuantity = useSelector((state) =>
    cartTotalQuantity(state.cart.items)
  );

  console.log("component");

  //dispatch (init) -> store(init state)
  //1-useSelector -> state=> fn(state.cart.items) invoke -> return 0 -> memoize (0) ->render
  //2-useSelector -> state => state.category -> return {loading:false, records: []} -> memoize({x}) -> render

  //dispatch (cat.pending) -> store(update)
  //1-useSelector -> state=> fn(state.cart.items) invoke -> return 0 -> memoize (prev 0 === 0)
  //2-useSelector -> state => state.category -> return {loading:true, records: []} -> memoize(prev {x} !== new {x}) -> render

  //dispatch (cat.fulfilled) -> store(update)
  //1-useSelector -> state=> fn(state.cart.items) invoke -> return 0 -> memoize (prev 0 === 0)
  //2-useSelector -> state => state.category -> return {loading:false, records: [data]} -> memoize(prev {x} !== new {x}) -> render

  return (
    <div className={shoppingCart}>
      <img alt="" src={shoppingCartImg} width="30" />
      <div className={shoppingCartCounter}>{totalQuantity}</div>
    </div>
  );
};

export default CartHeaderIcon;
