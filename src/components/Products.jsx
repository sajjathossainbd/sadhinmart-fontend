/* eslint-disable react/prop-types */
import Product from "./Product";
import LoadingSpinner from "./shared/LoadingSpinner";

function Products({ searchText, isLoading, products }) {
  return (
    <div className="py-10">
      {isLoading && searchText ? (
        <LoadingSpinner />
      ) : searchText && isLoading ? (
        <LoadingSpinner />
      ) : !products?.length ? (
        <p className="flex items-center justify-center text-3xl font-semibold text-red-800">
          Nothing Found!
        </p>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10 max-sm:mx-4 px-10">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}{" "}
        </div>
      )}
    </div>
  );
}

export default Products;
