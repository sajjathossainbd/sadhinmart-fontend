import { useQuery } from "@tanstack/react-query";
import Products from "../../components/Products";
import Search from "../../components/Search";
import axios from "axios";
import { useState } from "react";

function Home() {
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", searchText, sortOrder], // Include sortOrder here
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:5000/products?productName=${searchText}&sort=${sortOrder}`
      );
      return data?.data;
    },
  });

  return (
    <div>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        products={products}
      />
      <div className="flex justify-center items-center">
        <div className="sort-options ">
          <label htmlFor="sort">Sort by Price: </label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Select</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      </div>

      <Products
        searchText={searchText}
        isLoading={isLoading}
        products={products}
      />
    </div>
  );
}

export default Home;
