"use client";
import React from "react";

import { FaJs, FaReact, FaGitAlt, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import {
  SiTypescript,
  SiMysql,
  SiCsharp,
  SiGithub,
  SiSass,
  SiTailwindcss,
  SiStyledcomponents,
  SiHive,
  SiAngular,
  SiSpringboot
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Git/GitHub", icon: <FaGitAlt /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "React", icon: <FaReact /> },
  { name: "CSS/SASS", icon: <FaCss3Alt /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "C#", icon: <SiCsharp /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Styled Components", icon: <SiStyledcomponents /> },
  { name: "ERP", icon: <SiHive /> },
  { name: "React Native", icon: <FaReact /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Angular", icon: <SiAngular /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-200 w-full py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">
          Minhas <span className="text-secondary">Habilidades</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 ; gap-8 px-4 xl1:pl-24">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex bg-[#ececec] flex-col items-center justify-center max-h-[300px] max-w-[300px] min-h-[200px] text-center p-8 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="text-4xl text-[#2990d5] mb-4">{skill.icon}</div>
            <p className="text-xl font-sans font-semibold text-[#2990d5]">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
