import React, { useState } from "react";
import useProducts from "../Hooks/useProducts";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router";
import appErrorImg from "../assets/App-Error.png";
const Apps = () => {
  const { products, loading } = useProducts();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchProducts = term
    ? products.filter((product) =>
        product.title.toLocaleLowerCase().includes(term)
      )
    : products;
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
          <h2> ({searchProducts.length}) Apps Found</h2>
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
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="search Apps"
            />
          </label>
        </div>
      </div>
      {searchProducts.length === 0 ? (
        // <p className="text-center text-gray-500 mt-6 text-lg font-medium">
        //   No App Found 😔
        // </p>
        <div className="flex flex-col items-center my-16">
          <img src={appErrorImg} alt="" />
          <h2 className="text-[#001931] text-5xl font-semibold mt-9">
            OPPS!! APP NOT FOUND
          </h2>
          <p className="text-[#627382] text-[20px] font-normal mt-2">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <Link
            to="/"
            className="py-3 px-4 bg-[#632EE3] rounded-[4px] text-[#FFFFFF] font-semibold my-4"
          >
            Go Back!
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto w-full px-4 py-10 lg:px-12">
          {searchProducts.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
