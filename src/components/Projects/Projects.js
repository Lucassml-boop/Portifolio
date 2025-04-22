"use client";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";


const projects = [
  {
    title: "Barber Shop",
    image: "/full-stack.png",
    description: "Sistema completo para agendamento em barbearias (Front-end + API)",
    link: "Front-end: https://github.com/Lucassml-boop/barber-shop-front",
    link: "API: https://github.com/Lucassml-boop/barber-shop-api",
  },
  {
    title: "Anime Database",
    image: "/anime-database.png",
    description:
      "Aplicação para busca e gerenciamento de animes com consumo de API",
    link: "https://anime-data-base.vercel.app/",
  },
  {
    title: "Api List ToDo",
    image: "/full-stack.png",
    description: "API RESTful para gerenciamento de tarefas",
    link: "https://github.com/Lucassml-boop/Api-list-todo",
  },
  {
    title: "BuzzFeed Quiz Clone ",
    image: "/quizz.png",
    description: " Este é um projeto de clone do BuzzFeed Quiz desenvolvido com Angular. ",
    link: "https://quiz-clone-buzzfeed.vercel.app/",
  },
  {
    title: "Angular Blog ",
    image: "/blog.png",
    description: "Consiste em um blog simples construído com Angular. ",
    link: "https://github.com/Lucassml-boop/angular-blog-dio",
  },
  {
    title: "Em breve...",
    description: "Em breve...",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">
          Últimos <span className="text-secondary">Projetos</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-[320px] h-[320px] group overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">
                  Em breve...
                </span>
              </div>
            )}

            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-white text-2xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-200 mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-primary p-2 rounded-full hover:bg-secondary transition-colors duration-300"
                >
                  <FaExternalLinkAlt className="text-xl" />{" "}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
