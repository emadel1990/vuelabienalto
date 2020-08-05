import React from "react";
import { Link } from "react-router-dom";
export default function Card(props) {
  const { img, title, description, enlace } = props;
  return (
    <div className="overflow-hidden rounded-lg shadow-lg bg-white">
      <img src={img} alt="" className="w-full h-auto object-cover" />

      <header className="flex items-center justify-between leading-tight p-2 px-4">
        <h1 className="text-lg">
          <a className="hover:text-blue-800 font-bold italic" href="/">
            {title}
          </a>
        </h1>
      </header>
      <div className="pb-2 px-4 text-sm  text-gray-800">
        {description.map((desc, i) => {
          return <p key={i}>{desc}</p>;
        })}
      </div>
      <div className="px-4 pb-2 flex justify-end">
        <Link
          to={`/${enlace}`}
          className="bg-transparent hover:bg-blue-600 text-blue-600 font-semibold hover:text-white py-1 px-4 border border-blue-600 hover:border-transparent rounded mr-2 text-xs"
        >
          Ver Más
        </Link>
      </div>
    </div>
  );
}
