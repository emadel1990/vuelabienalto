import React from "react";

export default function HeaderPages({ title }) {
  return (
    <div>
      <div className="w-full h-72 bg-url-blue relative flex justify-center items-center">
        <div className="absolute">
          <h2
            className="text-5xl font-extrabold text-white"
            style={{ fontFamily: "Raleway" }}
          >
            {title}
          </h2>
        </div>
        <div className="skew-bottom-12"></div>
      </div>
    </div>
  );
}
