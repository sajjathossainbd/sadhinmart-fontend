import { useQuery } from "@tanstack/react-query";
import Products from "../../components/Products";
import Search from "../../components/Search";
import axios from "axios";
import { useState } from "react";

function Home() {
  const [searchText, setSearchText] = useState("");

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", searchText],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://sadhin-mart-back-end.vercel.app/products?productName=${searchText}`
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
      <Products
        searchText={searchText}
        isLoading={isLoading}
        products={products}
      />
    </div>
  );
}

export default Home;
