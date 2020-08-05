import React from "react";
import Card from "../components/CoursesCard";
import HeaderPages from "../components/HeaderPages";
import PNL from "../assets/img/cursos/PNL.png";
import ConstFamiliares from "../assets/img/cursos/familyconstellations.jpg";

function Courses() {
  return (
    <div className="bg-gray-300 w-full">
      <HeaderPages title="Cursos y Talleres" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-6 my-12 mx-24">
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
