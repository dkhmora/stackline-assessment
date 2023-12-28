import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchProductsFailure,
  fetchProductsSuccess,
  fetchProductsRequest,
} from "../redux/actions/productActions";
import { useSelector } from "react-redux";

const STACKLINE_SAMPLE_PRODUCTS_DATA_PATH =
  "/stackline_frontend_assessment_data_2021.json";

const useFetchProducts = () => {
  const store = useSelector((state) => state);
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
        dispatch(fetchProductsSuccess(data));
      } catch (error) {
        console.error(error);
        dispatch(fetchProductsFailure((error as Error).message));
      }
    };

    fetchData();

    console.log("Store: ", store);
  }, [dispatch]);
};

export default useFetchProducts;
