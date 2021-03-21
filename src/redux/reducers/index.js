import { combineReducers } from "redux";
import cartReducer from "./cart.reducer"
import modeReducer from "./mode.reducer"

export default combineReducers({ cart: cartReducer, mode: modeReducer });
