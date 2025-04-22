import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="bg-[#e5e7eb] py-28 px-4 xl:px-[15%] h-auto">
      <div className="max-w-[600px]  p-6">
        <h2 className="pb-4 text-4xl text-primary font-semibold">
          Sobre <span className="text-secondary">Mim</span>
        </h2>
        <p className="mt-4 text-lg text-primary font-semibold">
          Apaixonado por desenvolvimento de software e sempre buscando novos
          desafios.<br></br>Sou de São Paulo, Mauá e tenho 21 anos!
        </p>
        <div className="mt-6 text-base">
          <p className="text-primary font-medium">
            <strong>Atualmente cursando:</strong> Informática para Negócios -
            Faculdade de Tecnologia de São Paulo - FATEC-SP (2024 - 2027)
          </p>
        </div>
        <div
          id="redesSociais"
          className="flex gap-6 mt-6 justify-center sm:justify-start"
        >
          <a
            href="https://github.com/Lucassml-boop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-3xl hover:text-secondary transition-transform transform hover:scale-95"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-samuel-borges-b551481b8/"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-black text-3xl hover:text-secondary transition-transform transform hover:scale-95"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/luscasml_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-3xl hover:text-secondary transition-transform transform hover:scale-95 "
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}
