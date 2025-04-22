import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaJava, FaAngular, FaReact } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

const skills = [
  { name: 'Java', icon: <FaJava className="w-12 h-12 text-red-500" /> },
  { name: 'Angular', icon: <FaAngular className="w-12 h-12 text-red-500" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="w-12 h-12 text-green-500" /> },
  { name: 'React', icon: <FaReact className="w-12 h-12 text-blue-500" /> },
  { name: 'JavaScript', icon: '/weber.svg' },
  { name: 'Node.js', icon: '/weber.svg' },
  { name: 'TypeScript', icon: '/weber.svg' },
  { name: 'Next.js', icon: '/weber.svg' },
  { name: 'Python', icon: '/weber.svg' },
  { name: 'SQL', icon: '/weber.svg' },
  { name: 'Git', icon: '/weber.svg' },
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Minhas <span className="text-blue-400">Habilidades</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-lg flex flex-col items-center hover:bg-gray-700 transition-colors"
              >
                <div className="mb-4">
                  {typeof skill.icon === 'string' ? (
                    <div className="relative w-12 h-12">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    skill.icon
                  )}
                </div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 