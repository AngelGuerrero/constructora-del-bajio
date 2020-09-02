import custom from "./Hero.module.scss";
import { motion } from "framer-motion";

import CarouselComponent from "./Carousel";

export default function Hero() {
  const t1 = [
    "P",
    "R",
    "O",
    "F",
    "E",
    "S",
    "I",
    "O",
    "N",
    "A",
    "L",
    "I",
    "S",
    "M",
    "O",
  ];

  const profesionalismoTemplate = (
    <div className={`${custom.box__title_1} d-flex flex-wrap`}>
      {t1.map((letter, index) => (
        <motion.h1
          key={index}
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.2,
            duration: 0.5,
          }}
        >
          {letter}
        </motion.h1>
      ))}
    </div>
  );

  return (
    <div className={`${custom.hero__container}`}>
      <CarouselComponent></CarouselComponent>

      {/* Float box, contains text presentation and logo */}
      <div className={`${custom.box__text}`}>
        {/* 
            Official logo with name in mobile
            hidden in larger screen
        */}
        <div
          className={`mb-4
                      d-flex
                      d-sm-flex
                      d-md-none
                      justify-content-center
                      align-items-center
                    `}
          data-aos="fade-up"
        >
          <img
            className={custom.hero__image}
            src="/images/logo/logo_nombre.png"
            srcSet="/images/logo/logo_nombre.png"
            alt="logo"
          />
        </div>

        {/* Presentation text */}
        <div className="d-none d-md-block">
          {profesionalismoTemplate}
          <h3
            className={`${custom.box__title_2} `}
            data-aos="fade-right"
            data-aos-delay="2500"
          >
            Compromiso
          </h3>
          <h4
            className={`${custom.box__title_3}`}
            data-aos="fade-right"
            data-aos-delay="3000"
          >
            Integridad
          </h4>
        </div>
      </div>
    </div>
  );
}
