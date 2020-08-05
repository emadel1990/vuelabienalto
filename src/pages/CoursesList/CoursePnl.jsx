import React from "react";
import HeaderPages from "../../components/HeaderPages";

import pensando from "../../assets/img/pensando.png";

export default function CoursePnl() {
  return (
    <div className="bg-gray-200 w-full">
      <HeaderPages title="Curso de Programación Neuro Lingüística" />

      <div className="my-8">
        <div className="w-32 md:w-48 mx-auto">
          <img src={pensando} alt="imagen" className="h-full w-full" />
        </div>
        <h2 className="text-center text-2xl font-semibold mx-4">
          Te estás preguntando ¿Para qué me sirve la PNL?
        </h2>
        <div className="my-4 mx-8 md:mx-32 ">
          <p>
            La Programación Neuro Lingüística es una herramienta que, si es bien
            desarrollada, mejora la vida laboral y las relaciones
            interpersonales.
          </p>
          <p className="my-1">
            Te ayuda a desprogramar las conductas y estados de ánimo limitantes.
            Aprenderás a responder de forma positiva ante los estímulos que nos
            generan emociones negativas.
          </p>
          <p className="my-1">
            Te permite a desenvolverse en favor de tus objetivos.
          </p>
          <p>
            Utilizarás la comunicación trasladando tus pensamientos positivos a
            tu lenguaje verbal y corporal. Estimularás tu creatividad y la
            motivación para lograr tus objetivos personales de forma eficaz y
            sin sufrir ante las situaciones conflictivas
          </p>

          <p className="my-2">
            Para aprender como algunas personas sobresalen en un campo y como
            enseñar esos patrones a otros. El proceso de aprender como una
            persona hace algo de manera excelente y enseñar esos patrones se
            conoce con el nombre de modelado.
          </p>
          <h3 className=" text-xl font-semibold ">La fórmula del Éxito:</h3>
        </div>
      </div>
    </div>
  );
}
