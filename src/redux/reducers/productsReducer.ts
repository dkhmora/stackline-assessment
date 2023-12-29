import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  ProductActionTypes,
  ProductsState,
} from "../../types";

const initialState: ProductsState = {
  loading: false,
  products: [],
  error: "",
};

const productsReducer = (state = initialState, action: ProductActionTypes) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload, error: "" };
    case FETCH_PRODUCTS_FAILURE:
      return { loading: false, products: [], error: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
