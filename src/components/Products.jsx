import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Product from "./Product";
import LoadingSpinner from "./shared/LoadingSpinner";

function Products() {
  const axiosPublic = useAxiosPublic();
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data;
    },
  });
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="py-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10 max-sm:mx-4">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
