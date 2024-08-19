import { useQuery } from "@tanstack/react-query";
import Products from "../../components/Products";
import Search from "../../components/Search";
import axios from "axios";
import { useState } from "react";
import LoadingSpinner from "../../components/shared/LoadingSpinner";

function Home() {
  const [searchText, setSearchText] = useState("");

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", searchText],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://future-skills-help-center-api.vercel.app/cards?search=${searchText}`
      );
      return data?.data;
    },
  });
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        products={products}
      />
      <Products />
    </div>
  );
}

export default Home;
