const reducer = (state, action) => {
  if (action.type === "CLEAR_ITEMS") {
    return { ...state, cart: [] };
  }
  if (action.type === "DELETE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  if (action.type === "TOTAL") {
    const { total, amount } = state.cart.reduce((cartTotal, cartItem) => {}, {
      total: 0,
      amount: 0,
    });
    return { ...state, amount, total };
  }
  return state;
};
export default reducer;
