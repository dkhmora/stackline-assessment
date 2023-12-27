export interface Product {
  id: string;
  title: string;
  image: URL;
  subtitle: string;
  brand: string;
  reviews: ProductReview[];
  retailer: Retailer;
  details: string[];
  tags: string[];
  sales: ProductSale[];
}

export interface ProductReview {
  customer: string;
  review: string;
  score: number;
}

export interface ProductSale {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export interface ProductsState {
  loading: boolean;
  users: Product[];
  error: Error;
}

export type Retailer = "Amazon" | "Best Buy" | "Walmart";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

interface FetchProductsRequestAction {
  type: typeof FETCH_PRODUCTS_REQUEST;
}

interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

interface FetchProductsFailureAction {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: string;
}

// Combine product action types
export type ProductActionTypes =
  | FetchProductsRequestAction
  | FetchProductsSuccessAction
  | FetchProductsFailureAction;
