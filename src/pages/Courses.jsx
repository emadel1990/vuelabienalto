import React from "react";
import Card from "../components/CoursesCard";
import HeaderPages from "../components/HeaderPages";

import {
  PNL,
  ConstFamiliares,
  Coaching,
  Oratoria,
} from "../components/constantes";

function Courses() {
  return (
    <div className="bg-gray-300 w-full">
      <HeaderPages
        title="Cursos y Talleres"
        image="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-6 my-12 mx-24">
        <Card
          img={PNL}
          title="Diplomado de Programación Neuro Lingüística"
          description={[
            "Quizás te estás preguntando ¿Para qué me sirve la PNL?",
            "La Programación Neuro Lingüística es una herramienta, que, si es bien desarrollada, mejora la vida...",
          ]}
          enlace="curso-pnl"
        />

        <Card
          img={ConstFamiliares}
          title="Curso de Constelaciones Familiares"
          description={[
            "¿Qué son las Constelaciones Familiares?",
            "Formar un profesional con herramientas teóricas, prácticas, pedagógicas...",
          ]}
          enlace="curso-constelaciones-familiares"
        />

        <Card
          img={Coaching}
          title="Curso de Programación Neuro Lingüística"
          description={[
            "¿Qué son las Constelaciones Familiares?",
            "Formar un profesional con herramientas teóricas, prácticas, pedagógicas...",
          ]}
          enlace="curso-pnl"
        />

        <Card
          img={Oratoria}
          title="Curso de Constelaciones Familiares"
          description={[
            "Quizás te estás preguntando ¿Para qué me sirve la PNL?",
            "La Programación Neuro Lingüística es una herramienta, que, si es bien desarrollada, mejora la vida...",
          ]}
          enlace="curso-constelaciones-familiares"
        />

        <Card
          img={PNL}
          title="Curso de Programación Neuro Lingüística"
          description={[
            "Quizás te estás preguntando ¿Para qué me sirve la PNL?",
            "La Programación Neuro Lingüística es una herramienta, que, si es bien desarrollada, mejora la vida...",
          ]}
          enlace="curso-pnl"
        />

        <Card
          img={ConstFamiliares}
          title="Curso de Constelaciones Familiares"
          description={[
            "¿Qué son las Constelaciones Familiares?",
            "Formar un profesional con herramientas teóricas, prácticas, pedagógicas...",
          ]}
          enlace="curso-constelaciones-familiares"
        />

        <Card
          img={PNL}
          title="Curso de Programación Neuro Lingüística"
          description={[
            "¿Qué son las Constelaciones Familiares?",
            "Formar un profesional con herramientas teóricas, prácticas, pedagógicas...",
          ]}
          enlace="curso-pnl"
        />

        <Card
          img={ConstFamiliares}
          title="Curso de Constelaciones Familiares"
          description={[
            "Quizás te estás preguntando ¿Para qué me sirve la PNL?",
            "La Programación Neuro Lingüística es una herramienta, que, si es bien desarrollada, mejora la vida...",
          ]}
          enlace="curso-constelaciones-familiares"
        />
      </div>
    </div>
  );
}

export default Courses;
