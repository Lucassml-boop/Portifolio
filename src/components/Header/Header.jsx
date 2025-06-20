import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#home"
              className="font-bold text-3xl justify-center items-center flex pt-6 sm:pt-8"
              style={{ paddingTop: isScrolled ? "1rem" : "1.5rem" }}
            >
              <span className="text-secondary mr-1"> &lt;/&gt;</span>
              <span className="text-secondary font-semibold tracking-normal">
                B
              </span>
              orges
            </a>
          </motion.div>

          <nav>
            <ul className="flex space-x-8">
              {["Início", "Sobre", "Habilidades", "Projetos", "Contato"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;