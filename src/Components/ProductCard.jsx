import React from "react";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { title, image, ratingAvg, downloads, id, downloadsUnit } = product;
  return (
    <Link to={`/app/${id}`}>
      <div className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out">
        <figure className="h-48 overflow-hidden">
          <img className="w-full object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between mt-4">
            <div className="flex items-center gap-2 bg-[#F1F5E8] px-2.5 py-1.5 rounded-[4px]">
              <img className="w-[16px]" src={download} alt="" />
              <h5 className="text-[#00D390] font-medium">
                {downloads}
                {downloadsUnit}
              </h5>
            </div>
            <div>
              <div className="flex items-center gap-2 bg-[#FFF0E1] px-2.5 py-1.5 rounded-[4px]">
                <img className="w-[16px]" src={rating} alt="" />
                <h5 className="text-[#00D390] font-medium">{ratingAvg}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
