import React from "react";
import HeaderPages from "../components/HeaderPages";

const AboutUs = () => {
  return (
    <div className="bg-gray-200 w-full">
      <HeaderPages
        title="Sobre Nosotros"
        subtitle="&ldquo;Desarrollamos Líderes creativos e innovadores que inspiran e
            impactan en la comunidad&rdquo;"
        image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      />
    </div>
  );
};

export default AboutUs;
