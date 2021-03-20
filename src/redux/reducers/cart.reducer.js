import { ADD_TO_CART } from "../actions/cart.action";

const initialState = {
  items: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.payload;
      const items = state.items;
      items.push(item);
      return {
        ...state,
        items
      };
    }
    default:
      return state;
  }
}
