import { Suspense, lazy } from "react";
import "./App.css";
import stacklineLogo from "./assets/stackline_logo.svg";
import SliderLoader from "./components/SliderLoader";
import useFetchProducts from "./hooks/useFetchProducts";
import ErrorMessage from "./components/ErrorMessage";

const ProductPage = lazy(() => import("./pages/ProductPage"));
const STACKLINE_SAMPLE_PRODUCTS_DATA_PATH =
  "stackline_frontend_assessment_data_2021.json";

function App() {
  const { loading, products, error } = useFetchProducts(
    STACKLINE_SAMPLE_PRODUCTS_DATA_PATH
  );
  const firstProduct = products[0]; // Get first product for demonstration purposes

  return (
    <div>
      <header>
        <div className="flex h-14 md:h-20 w-full bg-[#052849] shadow-lg">
          <img src={stacklineLogo} alt="logo" className="h-full p-5 md:p-7" />
        </div>
      </header>

      <main>
        {/* Error handling */}
        {error ? (
          <ErrorMessage errorMessage={error} />
        ) : (
          <Suspense fallback={<SliderLoader />}>
            {/* Suspense for lazy loading */}
            {!loading ? <ProductPage product={firstProduct} /> : null}
          </Suspense>
        )}
      </main>
    </div>
  );
}

export default App;
