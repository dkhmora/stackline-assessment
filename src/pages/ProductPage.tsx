import { Product } from "../types";
import SalesChartCard from "../components/SalesChartCard";
import SalesTableCard from "../components/SalesTableCard";
import ProductDetailsCard from "../components/ProductDetailsCard";

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <div className="flex flex-col px-2 py-8 md:flex-row md:space-x-5 space-y-10 md:space-y-0 md:px-5 md:py-16 animate-fadeIn ease-in-out duration-100">
      <section className="flex w-full md:flex-grow md:w-2/5 lg:w-1/5">
        <ProductDetailsCard
          image={product.image}
          title={product.title}
          subtitle={product.subtitle}
          tags={product.tags}
        />
      </section>

      <section className="flex flex-col w-full space-y-10 md:w-3/5 lg:w-4/5 md:space-y-16">
        <SalesChartCard sales={product.sales} />

        <SalesTableCard sales={product.sales} />
      </section>
    </div>
  );
}
