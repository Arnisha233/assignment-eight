import React, { useEffect, useState } from "react";
import downloadImg from "../assets/icon-downloads.png";
import reviewImg from "../assets/icon-review.png";
import ratingImg from "../assets/icon-ratings.png";
const Installation = () => {
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) setWishlist(savedList);
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "downloads-asc") {
      return [...wishlist].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "downloads-desc") {
      return [...wishlist].sort((a, b) => b.downloads - a.downloads);
    } else {
      return wishlist;
    }
  })();

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    let updatedList = existingList.filter((p) => p.id !== id);
    setWishlist(updatedList);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  };

  return (
    <div className="space-y-6 max-w-screen-xl mx-auto w-full px-4 py-10 lg:px-12">
      <div className="flex justify-between">
        <h3>{wishlist.length} Apps Found</h3>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Sort By Size</option>
          <option value="downloads-asc">Low-High</option>
          <option value="downloads-desc">High-Low</option>
        </select>
      </div>
      <div>
        {sortedItem.map((p) => (
          <div className="p-4 flex justify-between">
            <div>
              <div>
                <div className="flex gap-4">
                  <div>
                    <img
                      className="w-[80px] h-[80px] rounded-[8px]"
                      src={p.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="text-[#001931] text-[20px] font-medium">
                      {p.title}
                    </h4>
                    <div className="flex items-center gap-4 mt-4">
                      <img
                        className="w-[16px] h-[16px]"
                        src={downloadImg}
                        alt=""
                      />
                      <p>
                        {p.downloads}
                        {p.downloadsUnit}
                      </p>
                      <img
                        className="w-[16px] h-[16px]"
                        src={ratingImg}
                        alt=""
                      />
                      <p>{p.ratingAvg}</p>
                      <img
                        className="w-[16px] h-[16px]"
                        src={reviewImg}
                        alt=""
                      />
                      <p>{p.reviews}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleRemove(p.id)}
                className="btn px-4 py-3 bg-[#00D390] text-[#FFFFFF] font-semibold"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
