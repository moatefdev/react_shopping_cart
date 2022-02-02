import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productsReducer";

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
});
