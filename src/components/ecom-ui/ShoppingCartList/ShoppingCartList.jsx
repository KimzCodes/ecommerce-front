import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";

const ShoppingCartList = ({ products, items, changeQuantityHandler }) => {
  const shoppingCartList = products.length
    ? products.map((el) => {
        const quantity = items[el.id];
        return (
          <ShoppingCartItem
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

export default ShoppingCartList;
