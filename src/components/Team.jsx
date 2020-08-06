import React from "react";

import Card from "./Card";
import {
  Claudio,
  Yani,
  Gloria,
  Vivian,
  Ariel,
  Pedro,
} from "../components/constantes";

export default function Team() {
  //img, name, cargo, description, facebook, instagram
  return (
    <div>
      <h2 className="text-center text-2xl">
        Equipo de Coaches de Vuelabienalto
      </h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-4 gap-6 mx-12 my-8">
        <Card
          img={Claudio}
          name="Claudio Español"
          cargo="Coach Ontológico Profesional"
          description={[
            "Conferencista Internacional.",
            "Director de Soñaré Adolescentes Latinoamética.",
            "Especialista en liderazgo y trabajo con jóvenes y adolescentes.",
          ]}
          facebook="https://www.facebook.com/Claudioenargentina"
          instagram="https://www.instagram.com"
        />

        <Card
          img={Yani}
          name="Yanina Martínez"
          cargo="Coach Ontológico Profesional"
          description={[
            "Técnica en RRHH, especialista en Selección y Reclutamiento.",
            "POST TÍTULO EN COACHING ORGANIZACIONAL (ECOA) 2020.",
          ]}
          facebook="https://www.facebook.com/"
          instagram="https://www.instagram.com"
        />

        <Card
          img={Gloria}
          name="Gloria Sawaguchii"
          cargo="Coach Ontológico Profesional"
          description={["Masoterapeuta.", "Instructora de la lengua Japonesa."]}
          facebook="https://www.facebook.com/"
          instagram="https://www.instagram.com"
        />

        <Card
          img={Vivian}
          name="Vivian Margall"
          cargo="Coach Ontológico Profesional"
          description={[
            "Masoterapeuta.",
            "Capacitadora en distintas áreas de Estética y Belleza.",
          ]}
          facebook="https://www.facebook.com/"
          instagram="https://www.instagram.com"
        />

        <Card
          img={Ariel}
          name="Ariel Cabral"
          cargo="Coach Ontológico Profesional"
          description={["Post título en “Coaching Organizacional.”"]}
          facebook="https://www.facebook.com/"
          instagram="https://www.instagram.com"
        />

        <Card
          img={Pedro}
          name="Pedro Valenzuela"
          cargo="Coach Ontológico Profesional"
          description={[]}
          facebook="https://www.facebook.com/"
          instagram="https://www.instagram.com"
        />
      </div>
    </div>
  );
}
