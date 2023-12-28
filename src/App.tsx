import "./App.css";
import stacklineLogo from "./assets/stackline_logo.svg";
import ProductDetailsCard from "./components/ProductDetailsCard";
import SalesTableCard from "./components/SalesTableCard";
import useFetchProducts from "./hooks/useFetchProducts";

function App() {
  const { loading, products, error } = useFetchProducts();
  const firstProduct = products[0];

  return (
    <div className="flex flex-col w-screen h-screen">
      <header className="flex h-20 w-full bg-[#052849] shadow-lg">
        <img src={stacklineLogo} alt="logo" className="h-full p-6" />
      </header>

      <main className="flex h-screen space-x-5 px-5 py-16">
        <section className="flex w-1/5">
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
          <div className="h-full w-full shadow-md bg-white">
            <h1 className="text-3xl font-bold underline">Chart</h1>
          </div>

          {!loading && !error ? (
            <SalesTableCard sales={firstProduct.sales} />
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;
