import CartItem from "../CartItem/CartItem";

const CartList = ({ products, items, changeQuantityHandler }) => {
  const shoppingCartList = products.length
    ? products.map((el) => {
        const quantity = items[el.id];
        return (
          <CartItem
            key={el.id}
            data={el}
            quantity={quantity}
            changeQuantityHandler={changeQuantityHandler}
          />
        );
      })
    : "Your cart is empty";

  return <div>{shoppingCartList}</div>;
};

export default CartList;