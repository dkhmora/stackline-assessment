import { combineReducers } from "redux";
import productsReducer from "./productsReducer";

// Combine all reducers
const rootReducer = combineReducers({
  data: productsReducer,
});

export default rootReducer;
