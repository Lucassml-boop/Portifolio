import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1. Uma breve explicação sobre o que foi feito e as tecnologias utilizadas.',
    image: '/full-stack.png',
    technologies: ['Angular', 'Spring-boot', 'Docker'],
    link: '#',
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do projeto 2. Uma breve explicação sobre o que foi feito e as tecnologias utilizadas.',
    image: '/anime-database.png',
    technologies: ['React', 'Sass', 'Api-Jikan'],
    link: '#',
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do projeto 3. Uma breve explicação sobre o que foi feito e as tecnologias utilizadas.',
    image: '/full-stack.png',
    technologies: ['Spring-boot', 'PostgreSQL', 'Maven'],
    link: '#',
  },
  {
    title: 'Projeto 4',
    description: 'Descrição do projeto 4. Uma breve explicação sobre o que foi feito e as tecnologias utilizadas.',
    image: '/quizz.png',
    technologies: ['Angular', 'TypeScript'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Meus <span className="text-blue-400">Projetos</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-600 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Ver Projeto
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 