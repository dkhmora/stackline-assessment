import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchProductsFailure,
  fetchProductsSuccess,
  fetchProductsRequest,
} from "../redux/actions/productActions";
import { RootState, ProductsState } from "../types";
import { useSelector } from "react-redux";

const useFetchProducts = (url: string) => {
  const { loading, products, error }: ProductsState = useSelector(
    (state: RootState) => state.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading) {
      dispatch(fetchProductsRequest()); // dispatching request action

      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("HTTP error " + res.status); // handle HTTP error
          }

          return res.json();
        })
        .then((data) => dispatch(fetchProductsSuccess(data))) // dispatching success action
        .catch((error) => {
          console.error(error);
          dispatch(fetchProductsFailure((error as Error).message)); // dispatching failure action
        });
    }
  }, [dispatch, url]);

  return { loading, products, error };
};

export default useFetchProducts;
