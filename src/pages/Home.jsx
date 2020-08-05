import React from "react";

import Header from "../components/Header";
import Video from "../components/Video";
import Nosotros from "../components/Nosotros";
import Team from "../components/Team";

const Home = () => {
  return (
    <div className="bg-gray-200">
      <Header />
      <Video />
      <Nosotros />
      <Team />
    </div>
  );
};

export default Home;
