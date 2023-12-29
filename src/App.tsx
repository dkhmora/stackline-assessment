import "./App.css";
import stacklineLogo from "./assets/stackline_logo.svg";
import SliderLoader from "./components/SliderLoader";
import useFetchProducts from "./hooks/useFetchProducts";
import ProductPage from "./pages/ProductPage";

function App() {
  const { loading, products, error } = useFetchProducts();
  const firstProduct = products[0];

  return (
    <div className="flex flex-1 flex-col w-screen">
      <header>
        <div className="flex h-20 w-full bg-[#052849] shadow-lg">
          <img src={stacklineLogo} alt="logo" className="h-full p-6" />
        </div>

        {loading ? <SliderLoader /> : null}
      </header>

      <main>
        {!loading ? <ProductPage product={firstProduct} error={error} /> : null}
      </main>
    </div>
  );
}

export default App;
