import React, { Fragment, Component } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />

        <main className="overflow-x-hidden">{this.props.children}</main>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
