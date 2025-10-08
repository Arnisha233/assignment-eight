import React from "react";
import useProducts from "../Hooks/useProducts";
import ProductCard from "../Components/ProductCard";

const Apps = () => {
  const { products } = useProducts();
  return (
    <div>
      <div className="text-center mt-16">
        <h2 className="text-[#001931] text-5xl font-bold">
          Our All Applications
        </h2>
        <p className="text-[#627382] text-[20px] font-normal mt-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto w-full px-4  lg:px-12 mt-10">
        <div className="flex items-center justify-between">
          <h2> {`(${products.length})`} Apps Found</h2>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="search Apps" />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto w-full px-4 py-10 lg:px-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
