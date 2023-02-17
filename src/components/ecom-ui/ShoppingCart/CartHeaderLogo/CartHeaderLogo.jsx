import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartTotalQuantity } from "../../../../store/cartSlice";
import { filterByCartItems } from "../../../../store/productSlice";
import { CartDrop } from "../..";
import { useLocation } from "react-router-dom";

import shoppingCartImg from "../../../../assets/shopping-card.svg";
import styles from "./styles.module.css";

const CartHeaderLogo = () => {
  const { shoppingCart, shoppingCartCounter, bumpCart } = styles;

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const divEl = useRef();

  const [openCartDrop, setOpenCartDrop] = useState(false);
  const [isAnimateCart, setIsAnimateCart] = useState(false);
  const totalQuantity = useSelector(cartTotalQuantity);
  const items = useSelector((state) => state.cart.items);
  const { records, loading, error } = useSelector((state) => state.products);

  const cleanPathName = pathname.replace(/\//, "");
  const cartClasses = `${shoppingCartCounter} ${isAnimateCart ? bumpCart : ""}`;

  useEffect(() => {
    if (cleanPathName === "shopping-cart") return;
    dispatch(filterByCartItems());
  }, [dispatch, cleanPathName]);

  useEffect(() => {
    if (totalQuantity === 0) return;
    setIsAnimateCart(true);
    const debounce = setTimeout(() => {
      setIsAnimateCart(false);
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [totalQuantity]);

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setOpenCartDrop(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.addEventListener("click", handler, true);
    };
  }, []);

  return (
    <div id="shopping-cart-logo" ref={divEl}>
      <div
        className={shoppingCart}
        onClick={() => setOpenCartDrop((prev) => !prev)}
      >
        <img alt="" src={shoppingCartImg} width="30" />
        <div className={cartClasses}>{totalQuantity}</div>
      </div>
      {openCartDrop ? (
        <CartDrop
          items={items}
          records={records}
          loading={loading}
          error={error}
        />
      ) : null}
    </div>
  );
};

export default CartHeaderLogo;
