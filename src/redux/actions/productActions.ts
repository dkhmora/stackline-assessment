import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  Product,
} from "../../types";

// Define product fetching actions
export const fetchProductsRequest = () => ({ type: FETCH_PRODUCTS_REQUEST });
export const fetchProductsSuccess = (products: Product[]) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});
export const fetchProductsFailure = (error: string) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});
