import React from "react";
// Importamos nuestro objeto desde el archivo de íconos
import svgs from "./Icons";

const Icon = ({ svg, clase, click, redes }) => {
  // Ingresaremos el nombre del ícono con la propiedad svg
  // de nuestro ícono en el objeto de íconos
  // Junto con una condicional para buscar el valor por
  // default que retornará null en caso de no encontrar coin svgs['default']
  // Estructura de un elemento SVG utilizando los datos de nuestro
  // archivo de íconos y las propiedades que le pasamos
  const svgRender = svgs[svg] || svgs.default;
  const svgColorChange =
    svg === "youtubeColor"
      ? "text-red-600 hover:text-red-500 active:scale-95"
      : svg === "instagramColor"
      ? "text-pink-700 hover:text-pink-500 active:scale-95"
      : svg === "facebookWhite"
      ? "text-white hover:text-gray-300 active:scale-95"
      : svg === "facebookColor"
      ? "text-blue-700 hover:text-blue-500 active:scale-95"
      : svg === "corazon"
      ? "text-red-700"
      : "text-gray-300";
  return (
    <svg
      className={`${svgColorChange} h-6 fill-current`}
      viewBox={svgRender.viewBox}
      classes={clase}
      title={redes}
      xmlns="http://www.w3.org/2000/svg"
    >
      {svgRender.svg}
    </svg>
  );
};

export default Icon;
