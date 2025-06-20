import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-col md:flex-row gap-8 justify-center items-center h-screen pb-[120px] px-4 xl:px-[15%] transition-all duration-300"
    >
      <div className="flex flex-col gap-2">
        
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary font-bold mt-20 md:mt-32">
          Olá, <br /> eu sou o Lucas!{" "}
        </h1>
        <h2 className="text-2xl items-start justify-start text-primary font-semibold">
          Desenvolvedor <span className="text-secondary">Front-End</span>
        </h2>
        <h3 className="text-lg text-primary">
          Buscando oportunidades de estágio com foco
          <br /> em desenvolvimento full-stack
        </h3>
        <div className="flex">
          <a
            href="https://api.whatsapp.com/send/?phone=5511910672861"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-secondary mt-4 text-white font-bold py-3 px-4 rounded-lg mr-6 transition-transform transform hover:scale-95">
              Fale comigo
            </button>
          </a>
        </div>
      </div>
      
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <Image
          src="/pic.jpg"
          alt="Lucas Samuel Borges"
          fill
          priority
          sizes="(max-width: 768px) 256px, 320px"
          className="rounded-full object-cover border-4 border-secondary shadow-lg"
        />
      </div>
    </div>
  );
}
