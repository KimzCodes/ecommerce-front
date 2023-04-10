import { createSelector } from "@reduxjs/toolkit";

export const cartTotalQuantity = createSelector(
  (state) => state.cart.items,
  (items) => {
    let totalQuantity = 0;

    for (const id in items) {
      totalQuantity += items[id];
    }
    return totalQuantity;
  }
);

export const totalPrice = createSelector(
  (state) => state.cart.items,
  (_, records) => records,
  (items, records) => {
    let price = 0;
    for (const record of records) {
      price += record.price * items[record.id];
    }
    return price.toFixed(2);
  }
);

export const itemQuantityById = createSelector(
  (state) => state.cart.items,
  (_, id) => id,
  (items, id) => {
    return items[id];
  }
);
