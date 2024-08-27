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
        `https://sadhin-mart-back-jasa26u4y-sajjats-projects.vercel.app/products?productName=${searchText}&sort=${sortOrder}`
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
      <div className="flex items-center justify-center">
        <div className="sort-options">
          <div className="pb-2">
            <label htmlFor="sort ">
              <strong>Sort by Price:</strong>
            </label>
          </div>
          <div className="">
            <select
              className="select select-ghost w-full max-w-xs"
              id="sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option className=" disabled selected" value="">
                Select
              </option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
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
