import React from "react";

import Icon from "../components/Icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="deep-space px-4 text-gray-300">
      <div className="flex items-center justify-between py-4">
        <p>Vuelabienalto 2020 &copy; - Todos los derechos reservados</p>

        <div className="grid grid-cols-4 gap-3">
          <Link to="/">
            <Icon svg="facebook" />
          </Link>
          <Link to="/">
            <Icon svg="instagram" />
          </Link>
          <Link to="/">
            <Icon svg="youtube" />
          </Link>
        </div>
      </div>

      <div
        className="flex justify-center py-2"
        style={{ borderTop: "1px solid #4a5568" }}
      >
        <p className=" px-2 flex justify-center">
          Desarrollado con
          <Icon svg="corazon" />
          por{"  "}
          <a
            href="https://www.instagram.com/gabriel_briitez/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold"
          >
            Gabriel Britez
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
