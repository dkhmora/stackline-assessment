import "./App.css";
import stacklineLogo from "./assets/stackline_logo.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsFailure,
  fetchProductsSuccess,
  fetchProductsRequest,
} from "./redux/actions/productActions";

const STACKLINE_SAMPLE_PRODUCTS_DATA_PATH =
  "/stackline_frontend_assessment_data_2021.json";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  // Fetch data from the test API
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
        console.log(error);
        dispatch(fetchProductsFailure((error as Error).message));
      }
    };

    fetchData();
  }, [dispatch]);

  // Check the store
  console.log("store", store);

  return (
    <div className="flex flex-col w-screen h-screen">
      <header className="flex h-20 w-full bg-[#052849] shadow-lg">
        <img src={stacklineLogo} alt="logo" className="h-full p-6" />
      </header>

      <main className="flex h-screen space-x-5 px-5 py-16">
        <section className="flex w-1/5">
          <div className="h-full w-full shadow-md bg-white rounded">
            <h1 className="text-3xl font-bold underline">Product Details</h1>
          </div>
        </section>

        <section className="flex flex-col w-4/5 space-y-16 rounded">
          <div className="h-full w-full shadow-md bg-white">
            <h1 className="text-3xl font-bold underline">Chart</h1>
          </div>

          <div className="h-full w-full shadow-md bg-white rounded">
            <h1 className="text-3xl font-bold underline">Sales Data</h1>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
