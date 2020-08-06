import React from "react";
import HeaderPages from "../../components/HeaderPages";
import ContentList from "../../components/ContentList";
import ItemList from "../../components/ItemList";

import pensando from "../../assets/img/pensando.png";
import check from "../../assets/img/check.svg";
import gol from "../../assets/img/gol.svg";

export default function CoursePnl() {
  return (
    <div className="bg-gray-200 w-full">
      <HeaderPages title="Curso de Programación Neuro Lingüística" />

      <div className="my-8">
        <div className="w-32 md:w-48 mx-auto">
          <img src={pensando} alt="imagen" className="h-full w-full" />
        </div>
        <h2 className="text-center text-3xl font-semibold mx-4">
          Te estás preguntando ¿Para qué me sirve la PNL?
        </h2>
        <div className="my-4 mx-6 sm:mx-8 md:mx-32 ">
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
          <h3 className=" text-xl font-semibold mb-2">La fórmula del Éxito:</h3>
          <ItemList num="1" content="Saber qué es lo que quieres." />
          <ItemList num="2" content="Entrar en Acción" />
          <ItemList
            num="3"
            content="Tener agudeza sensorial para saber lo que estamos obteniendo."
          />
          <ItemList
            num="4"
            content="Ser flexible, cambiar hasta que obtengamos el resultado deseado."
          />

          <h3 className=" text-xl font-semibold my-4">Contenido:</h3>
          <ContentList svg={check} content="Introducción." />
          <ContentList svg={check} content="Paradigmas." />
          <ContentList svg={check} content="¿Qué es la PNL?" />
          <ContentList svg={check} content="Algo de su historia." />
          <ContentList svg={check} content="Principios de la PNL." />
          <ContentList svg={gol} content="Mapa y territorio." />
          <ContentList
            svg={gol}
            content="Entendiendo tu modelo del mundo:  Modelos mentales (generalización, eliminación, distorsión)."
          />
          <ContentList
            svg={check}
            content="Filtros que hacen tu modelo del mundo único: Sistemas representacionales, Lenguaje, Creencias, 
Valores, Meta programas."
          />
          <ContentList svg={check} content="Entrenando la observación." />
          <ContentList
            svg={gol}
            content="Los elementos del pensamiento:  Los Sistemas Representacionales:  Como detectarlos"
          />
          <ContentList svg={check} content="Proceso de pensamiento." />
          <ContentList svg={check} content="Ritmo." />
          <ContentList svg={check} content="Palabras predicativas." />
          <ContentList svg={check} content="Distancia óptima." />
          <ContentList svg={check} content="Accesos oculares." />
          <ContentList
            svg={gol}
            content="Conectando con las personas: El Rapport, Calibrar, Espejear y Acompasar."
          />
          <ContentList svg={gol} content="Liderar con PNL." />
        </div>
      </div>
    </div>
  );
}
