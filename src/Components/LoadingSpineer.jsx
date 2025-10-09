import React from "react";
import { BeatLoader } from "react-spinners";

const LoadingSpineer = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <BeatLoader color="#632EE3" size={25} speedMultiplier={0.5}></BeatLoader>
    </div>
  );
};

export default LoadingSpineer;
