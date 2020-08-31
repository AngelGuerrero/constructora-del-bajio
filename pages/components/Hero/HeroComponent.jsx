import { Carousel } from "react-bootstrap";
import styles from "./Hero.module.scss";

export default function Hero() {
  const images = [
    "edificio.jpg",
    "castillos.jpg",
    "almacen.jpg",
    "base.jpg",
    "constructora.jpg",
  ];

  const items = images.map((image, index) => (
    <Carousel.Item className={styles.my_carousel__item} key={index}>
      <img className="d-block w-100" src={`/images/show/${image}`} alt="" />
    </Carousel.Item>
  ));

  return (
    <div className={`${styles.hero__container}`}>
      <Carousel controls={false} indicators={false}>
        {items}
      </Carousel>

      <div className={`${styles.box__text}`}>
        <div
          className={`mb-4
                      d-flex
                      d-sm-flex
                      d-md-none
                      justify-content-center
                      align-items-center `}
        >
          <img
            className={styles.hero__image}
            src="/images/logo/logo_nombre.png"
            alt="logo"
            srcSet="/images/logo/logo_nombre.png"
          />
        </div>
        <div className="d-none d-md-block">
          <h2 className={`${styles.box__title_1} `}>Profesionalismo</h2>
          <h3 className={`${styles.box__title_2} `}>Compromiso</h3>
          <h4 className={`${styles.box__title_3}`}>Integridad</h4>
        </div>
      </div>
    </div>
  );
}
