import { Container, Row, Col } from "react-bootstrap";
import custom from "./Services.module.scss";

export default function Services() {
  return (
    <div className={`${custom.services__container}`}>
      <Container className="py-5">
        <div className="p-5 bg-white rounded">
          <h1 className="title" data-aos="fade-right">
            Servicios
          </h1>
          <p className="text" data-aos="fade-in">
            Realizamos proyectos a la media, de acuerdo a las necesidades
            específicas de cada cliente, ofrecemos soluciones concretas y
            funcionales con la mejor relación costo-beneficio.
          </p>
          <Row>
            <Col
              className={`${custom.service__box}
                          rounded
                          p-4
                          text-center
                          shadow-lg
                          m-4
                          d-flex
                          justify-content-center
                          align-items-center
                        `}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h5 className="title">Construcción de obra civil</h5>
            </Col>
            <Col
              className={`${custom.service__box}
                          rounded
                          p-4
                          text-center
                          shadow-lg
                          m-4
                          d-flex
                          justify-content-center
                          align-items-center
                        `}
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <h5 className="title">Edificación</h5>
            </Col>
            <Col
              className={`${custom.service__box}
                          rounded
                          p-4
                          text-center
                          shadow-lg
                          m-4
                          d-flex
                          justify-content-center
                          align-items-center
                        `}
              data-aos="fade-up"
              data-aos-delay="1500"
            >
              <h5 className="title">Ingeniería</h5>
            </Col>
            <Col
              className={`${custom.service__box}
                          rounded
                          p-4
                          text-center
                          shadow-lg
                          m-4
                          d-flex
                          justify-content-center
                          align-items-center
                        `}
              data-aos="fade-up"
              data-aos-delay="2000"
            >
              <h5 className="title">Mantenimiento Civil</h5>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
