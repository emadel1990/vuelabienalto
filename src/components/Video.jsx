import React from "react";
import ReactPlayer from "react-player";

import { videoDirector } from "../components/constantes";

const Video = () => {
  return (
    <div className="flex justify-center flex-col py-2 w-full">
      <h2 className="md:text-5xl font-semibold my-4 capitalize text-center">
        ¿Quien soy?
      </h2>
      <div className="flex justify-center flex-col w-9/12 mx-auto text-center mb-4">
        <p>
          Diego Javier Martínez, Director de Vuelabienalto, Master en
          Programación Neurolingüística (Society of NLPTM), Coach ontológico
          Profesional con profundización en comunicación efectiva.
        </p>
      </div>
      <div className="md:w-3/4 mx-auto mb-8">
        <ReactPlayer
          url={videoDirector}
          controls={true}
          className=""
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Video;
