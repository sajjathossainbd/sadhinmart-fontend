import { useQuery } from "@tanstack/react-query";
import Products from "../../components/Products";
import Search from "../../components/Search";
import axios from "axios";
import { useState } from "react";

function Home() {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", searchText],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:5000/products?productName=${searchText}`
      );
      return data?.data; // Ensure you return the 'data' property of the response
    },
  });

  return (
    <div>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        products={products}
      />
      <Products
        searchText={searchText}
        isLoading={isLoading}
        products={products}
      />
    </div>
  );
}

export default Home;
