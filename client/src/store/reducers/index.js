import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { orderReducdr } from "./orderReducer";
import { productReducer } from "./productsReducer";

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  order: orderReducdr,
});
