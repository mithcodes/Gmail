import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-blue-400 border-t-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-blue-300 border-r-transparent animate-spin-slow"></div>
        <span className="absolute inset-0 flex items-center justify-center text-blue-600 font-semibold">
          Loading
        </span>
      </div>
    </div>
  );
};

export default Loader;
