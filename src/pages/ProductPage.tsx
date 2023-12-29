import { Product } from "../types";
import SalesChartCard from "../components/SalesChartCard";
import SalesTableCard from "../components/SalesTableCard";
import ProductDetailsCard from "../components/ProductDetailsCard";

interface ProductPageProps {
  product: Product;
  error: string;
}

export default function ProductPage({ product, error }: ProductPageProps) {
  return (
    <div className="flex space-x-5 px-5 py-16">
      <section className="flex flex-grow w-1/5">
        <ProductDetailsCard
          image={product.image}
          title={product.title}
          subtitle={product.subtitle}
          tags={product.tags}
        />
      </section>

      <section className="flex flex-col w-4/5 space-y-16 rounded">
        <SalesChartCard sales={product.sales} />

        <SalesTableCard sales={product.sales} />
      </section>
    </div>
  );
}
