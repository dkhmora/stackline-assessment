import "./App.css";
import stacklineLogo from "./assets/stackline_logo.svg";
import ProductDetailsCard from "./components/ProductDetailsCard";
import SalesChartCard from "./components/SalesChartCard";
import SalesTableCard from "./components/SalesTableCard";
import SliderLoader from "./components/SliderLoader";
import useFetchProducts from "./hooks/useFetchProducts";

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

      <main className="flex space-x-5 px-5 py-16">
        <section className="flex flex-grow w-1/5">
          {!loading && !error ? (
            <ProductDetailsCard
              image={firstProduct.image}
              title={firstProduct.title}
              subtitle={firstProduct.subtitle}
              tags={firstProduct.tags}
            />
          ) : null}
        </section>

        <section className="flex flex-col w-4/5 space-y-16 rounded">
          {!loading && !error ? (
            <SalesChartCard sales={firstProduct.sales} />
          ) : null}

          {!loading && !error ? (
            <SalesTableCard sales={firstProduct.sales} />
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;
