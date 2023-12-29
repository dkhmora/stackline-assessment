import { Suspense, lazy } from "react";
import "./App.css";
import stacklineLogo from "./assets/stackline_logo.svg";
import SliderLoader from "./components/SliderLoader";
import useFetchProducts from "./hooks/useFetchProducts";
import ErrorMessage from "./components/ErrorMessage";

const ProductPage = lazy(() => import("./pages/ProductPage"));

function App() {
  const { loading, products, error } = useFetchProducts();
  const firstProduct = products[0]; // Get first product for demonstration purposes

  return (
    <div className="flex flex-1 flex-col w-screen">
      <header>
        <div className="flex h-20 w-full bg-[#052849] shadow-lg">
          <img src={stacklineLogo} alt="logo" className="h-full p-6" />
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
