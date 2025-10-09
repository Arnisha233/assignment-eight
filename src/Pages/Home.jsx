import React from "react";
import Banner from "../Components/Banner/Banner";
import { Link } from "react-router";
import ProductCard from "../Components/ProductCard";
import useProducts from "../Hooks/useProducts";
import LoadingSpineer from "../Components/LoadingSpineer";

const Home = () => {
  const { products, loading, error } = useProducts();

  const featuredProducts = products.slice(0, 8);
  return (
    <div>
      <Banner></Banner>
      <div className="text-center mt-16">
        <h2 className="text-[#001931] text-5xl font-bold">Trending Apps</h2>
        <p className="text-[#627382] text-[20px] font-normal mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {loading ? (
        <LoadingSpineer></LoadingSpineer>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto w-full px-4 py-10 lg:px-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      )}
      <div className="flex justify-center items-center w-full  mb-16">
        <Link
          to="/apps"
          className="py-3 px-4 bg-[#632EE3] rounded-[4px] text-[#FFFFFF] font-semibold"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
