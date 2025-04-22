import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Sobre <span className="text-blue-400">Mim</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-4">
                Sou um desenvolvedor full stack apaixonado por criar soluções inovadoras e eficientes.
                Com experiência em diversas tecnologias, busco sempre me atualizar e aprender novas
                ferramentas para entregar os melhores resultados.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                Minha jornada na programação começou [sua história aqui]. Desde então,
                tenho trabalhado em diversos projetos que me permitiram desenvolver
                habilidades técnicas e interpessoais.
              </p>
              <p className="text-lg text-gray-300">
                Atualmente, estou focado em [seus objetivos atuais] e sempre aberto
                a novos desafios e oportunidades de crescimento.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-400 mb-2">Projetos</h3>
                <p className="text-gray-300">X+ completos</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-400 mb-2">Formação</h3>
                <p className="text-gray-300">[Sua formação]</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-400 mb-2">Idiomas</h3>
                <p className="text-gray-300">Português, Inglês, Espanhol</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 