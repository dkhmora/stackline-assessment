import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchProductsFailure,
  fetchProductsSuccess,
  fetchProductsRequest,
} from "../redux/actions/productActions";
import { RootState, ProductsState } from "../types";
import { useSelector } from "react-redux";

const STACKLINE_SAMPLE_PRODUCTS_DATA_PATH =
  "/stackline_frontend_assessment_data_2021.json";

const useFetchProducts = () => {
  const { loading, products, error }: ProductsState = useSelector(
    (state: RootState) => state.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("fetching data");
    const fetchData = async () => {
      dispatch(fetchProductsRequest());
      try {
        const response = await fetch(STACKLINE_SAMPLE_PRODUCTS_DATA_PATH);
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        const data = await response.json();
        console.log(data);
        dispatch(fetchProductsSuccess(data));
      } catch (error) {
        console.error(error);
        dispatch(fetchProductsFailure((error as Error).message));
      }
    };

    fetchData();
  }, [dispatch]);

  console.log(loading, products, error);

  return { loading, products, error };
};

export default useFetchProducts;
