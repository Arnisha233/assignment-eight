import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";

import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import reviewImg from "../assets/icon-review.png";
import { toast, ToastContainer } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useProducts();
  const product = products.find((p) => p.id === Number(id));
  if (loading) return <p>loadging...</p>;
  const {
    title,
    ratingAvg,
    downloads,
    reviews,
    description,
    image,
    ratings,
    downloadsUnit,
    size,
  } = product;

  const handleAddToWishList = () => {
    toast("Yahoo installed sucessfully");
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === product.id);
      if (isDuplicate) return alert("you already added");
      updatedList = [...existingList, product];
    } else {
      updatedList.push(product);
    }
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  };

  return (
    <div>
      <div className="flex gap-10 items-center my-20 max-w-screen-xl mx-auto w-full px-4 py-10 lg:px-12">
        <div className="w-[40%]">
          <div className="h-[350px] w-[350px] overflow-hidden">
            <img className="w-full object-cover" src={image} alt="" />
          </div>
        </div>
        <div className="w-[60%]">
          <h2 className="text-[#001931] text-3xl font-bold">{title}</h2>
          <h4 className="text-[#627382] text-[20px] font-normal">
            Developed by{" "}
            <span className="text-[#632EE3] text-[20px] font-semibold">
              productive.io
            </span>
          </h4>
          <div className="flex gap-6 mt-8">
            <div>
              <img className="w-[40px]" src={downloadImg} alt="" />
              <p className="text-[#001931] font-normal my-2">Downloads</p>
              <h3 className="text-[#001931] text-[30px] font-extrabold">
                {downloads}
                {downloadsUnit}
              </h3>
            </div>
            <div>
              <img className="w-[40px]" src={ratingImg} alt="" />
              <p className="text-[#001931] font-normal my-2">Average Ratings</p>
              <h3 className="text-[#001931] text-[30px] font-extrabold">
                {ratingAvg}
              </h3>
            </div>
            <div>
              <img className="w-[40px]" src={reviewImg} alt="" />
              <p className="text-[#001931] font-normal my-2">Total Reviews</p>
              <h3 className="text-[#001931] text-[30px] font-extrabold">
                {reviews}
              </h3>
            </div>
          </div>
          <button
            onClick={handleAddToWishList}
            className="px-5 py-3.5 bg-[#00D390] rounded-[4px] text-[#fff] font-semibold mt-7"
          >
            Install Now ({size} MB)
          </button>
        </div>
      </div>
      {/* chart start */}
      <div className="max-w-screen-xl mx-auto w-full px-4 py-10 lg:px-12">
        <h3 className="text-[#001931] text-[24px] font-semibold">Ratings</h3>
        {/* <div className="bg-base-100 rounded-xl p-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={product}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ratings.name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="ratings.count"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="uv"
                fill="#82ca9d"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div> */}
      </div>
      {/* chart end */}
      <div className="mb-16 max-w-screen-xl mx-auto w-full px-4 py-10 lg:px-12">
        <h3 className="text-[#001931] text-[24px] font-semibold">
          Description
        </h3>
        <p className="text-[20px] font-normal mt-6">{description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppDetails;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import useProducts from "../Hooks/useProducts";
// import downloadImg from "../assets/icon-downloads.png";
// import ratingImg from "../assets/icon-ratings.png";
// import reviewImg from "../assets/icon-review.png";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AppDetails = () => {
//   const { id } = useParams();
//   const { products, loading, error } = useProducts();
//   const product = products.find((p) => p.id === Number(id));

//   const [isInstalled, setIsInstalled] = useState(false);

//   useEffect(() => {
//     const existingList = JSON.parse(localStorage.getItem("wishlist")) || [];
//     const alreadyInstalled = existingList.some((p) => p.id === Number(id));
//     setIsInstalled(alreadyInstalled);
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading product.</p>;
//   if (!product) return <p>Product not found.</p>;

//   const { title, ratingAvg, downloads, reviews, description, image, size } =
//     product;

//   const handleAddToWishList = () => {
//     const existingList = JSON.parse(localStorage.getItem("wishlist")) || [];

//     const isDuplicate = existingList.some((p) => p.id === product.id);
//     if (isDuplicate) return alert("Already installed");

//     const updatedList = [...existingList, product];
//     localStorage.setItem("wishlist", JSON.stringify(updatedList));

//     toast.success("Yahoo! Installed successfully 🎉");

//     // ✅ Disable button after install
//     setIsInstalled(true);
//   };

//   return (
//     <div>
//       <div className="flex gap-10 items-center my-20 max-w-screen-xl mx-auto w-full px-4 py-10 lg:px-12">
//         <div className="w-[40%]">
//           <div className="h-[350px] w-[350px] overflow-hidden">
//             <img className="w-full object-cover" src={image} alt={title} />
//           </div>
//         </div>

//         <div className="w-[60%]">
//           <h2 className="text-[#001931] text-3xl font-bold">{title}</h2>
//           <h4 className="text-[#627382] text-[20px] font-normal">
//             Developed by{" "}
//             <span className="text-[#632EE3] text-[20px] font-semibold">
//               productive.io
//             </span>
//           </h4>

//           <div className="flex gap-6 mt-8">
//             <div>
//               <img className="w-[40px]" src={downloadImg} alt="" />
//               <p className="text-[#001931] font-normal my-2">Downloads</p>
//               <h3 className="text-[#001931] text-[30px] font-extrabold">
//                 {downloads}
//               </h3>
//             </div>
//             <div>
//               <img className="w-[40px]" src={ratingImg} alt="" />
//               <p className="text-[#001931] font-normal my-2">Average Ratings</p>
//               <h3 className="text-[#001931] text-[30px] font-extrabold">
//                 {ratingAvg}
//               </h3>
//             </div>
//             <div>
//               <img className="w-[40px]" src={reviewImg} alt="" />
//               <p className="text-[#001931] font-normal my-2">Total Reviews</p>
//               <h3 className="text-[#001931] text-[30px] font-extrabold">
//                 {reviews}
//               </h3>
//             </div>
//           </div>

//           {/* ✅ Button updated */}
//           <button
//             onClick={handleAddToWishList}
//             disabled={isInstalled}
//             className={`px-5 py-3.5 rounded-[4px] text-white font-semibold mt-7 transition
//               ${
//                 isInstalled ? "bg-[#00D390]" : "bg-[#00D390] hover:bg-[#00b67c]"
//               }`}
//           >
//             {isInstalled ? "Installed" : `Install Now (${size} MB)`}
//           </button>
//         </div>
//       </div>

//       {/* Description Section */}
//       <div className="mb-16 max-w-screen-xl mx-auto w-full px-4 py-10 lg:px-12">
//         <h3 className="text-[#001931] text-[24px] font-semibold">
//           Description
//         </h3>
//         <p className="text-[20px] font-normal mt-6">{description}</p>
//       </div>

//       <ToastContainer position="bottom-right" />
//     </div>
//   );
// };

// export default AppDetails;
