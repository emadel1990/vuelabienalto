import React from "react";

export default function Nosotros() {
  return (
    <div>
      <section className="w-full relative">
        <div className="skew-up-12"></div>
        <div className="w-full h-96 relative overflow-hidden">
          <div className="absolute w-full h-96 bg-blue-900 opacity-75 z-10"></div>
          <div className="bg-url-team w-full h-96 flex justify-center flex-col absolute text-white">
            <h2 className="text-5xl capitalize font-semibold z-20 text-center">
              Sobre Nosotros
            </h2>
            <h3 className="text-center text-2xl italic tracking-tight mb-4 z-20">
              &ldquo;Desarrollamos Líderes creativos e innovadores que inspiran
              e impactan en la comunidad&rdquo;
            </h3>
          </div>
          <div className="skew-bottom-12"></div>
        </div>
        <div className="w-10/12 mx-auto my-4 ">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            ipsam, distinctio architecto asperiores fuga magnam mollitia
            voluptatibus officiis placeat nostrum?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium libero quisquam odio incidunt voluptatum, aspernatur sed
            iusto ex modi? Voluptas libero beatae consequuntur laborum
            laboriosam voluptatum dolorem quasi reprehenderit unde dolore ipsa
            molestias voluptatem debitis, aliquam, voluptates necessitatibus
            aliquid ullam ad iste nobis optio hic deserunt a ipsam. Dicta,
            similique.
          </p>
        </div>
      </section>
    </div>
  );
}
