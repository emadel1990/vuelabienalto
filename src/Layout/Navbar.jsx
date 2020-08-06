import React, { Component } from "react";
import { Link } from "react-router-dom";

import { logoNav } from "../components/constantes";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      changeBgColor: false,
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (this.state.changeBgColor !== true) {
          this.setState({ changeBgColor: true });
        }
      }
      if (scrolled < 120) {
        if (this.state.changeBgColor !== false) {
          this.setState({ changeBgColor: false });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }
  render() {
    const bgColorChange =
      this.state.changeBgColor === false ? "bg-transparent" : "bg-url-blue";

    return (
      <nav
        className={`${bgColorChange} anim fixed z-50 w-full h-auto transition ease`}
        style={{ transition: "500ms ease" }}
      >
        <ul className="text-white flex md:justify-between flex-col md:flex-row w-full">
          <div>
            <Link to="/">
              <img className=" w-20 py-2 mx-4" src={logoNav} alt="logo-nav" />
            </Link>
          </div>
          <div className="flex">
            <li className="hover:bg-blue-900 cursor-pointer li-style">
              <Link to="/">Inicio</Link>
            </li>
            <li className="hover:bg-blue-900 cursor-pointer li-style">
              <Link to="/nosotros">Team</Link>
            </li>
            <li className="hover:bg-blue-900 cursor-pointer li-style">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:bg-blue-900 cursor-pointer li-style">
              <Link to="/formaciones">Formaciones</Link>
            </li>
            <li className="hover:bg-blue-900 cursor-pointer li-style">
              <Link to="/cursos">Cursos</Link>
            </li>
            <li className="hover:bg-blue-900 cursor-pointer li-style">
              <Link to="/fundaciones">Fundaciones</Link>
            </li>

            <li className="hover:bg-blue-900 cursor-pointer li-style">
              <Link to="/contacto">Contacto</Link>
            </li>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
