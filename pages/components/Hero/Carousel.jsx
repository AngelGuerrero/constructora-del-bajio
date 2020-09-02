import { Carousel } from "react-bootstrap";
import customStyles from "./Hero.module.scss";

const CarouselComponent = () => {
  // Images for carousel
  const images = [
    "edificio.jpg",
    "planos-4.jpg",
    "castillos.jpg",
    "almacen.jpg",
    "base.jpg",
    "constructora.jpg",
  ];

  return (
    <Carousel controls={false} indicators={false}>
      {images.map((image, index) => (
        <Carousel.Item className={customStyles.my_carousel__item} key={index}>
          <img className="d-block w-100" src={`/images/show/${image}`} alt="" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
