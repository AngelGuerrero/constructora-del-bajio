import { Container, Row, Col } from "react-bootstrap";
import styles from "./Services.module.scss";

export default function Services() {
  return (
    <div className={`${styles.services__container}`}>
      <Container className="py-5">
        <div className="p-5 bg-white rounded ">
          <h1 className="title">Servicios</h1>
          <p className="text">
            Realizamos proyectos a la media, de acuerdo a las necesidades
            específicas de cada cliente, ofrecemos soluciones concretas y
            funcionales con la mejor relación costo-beneficio.
          </p>
          <Row>
            <Col
              className={`${styles.service__box} rounded p-4 text-center shadow-lg m-4 d-flex justify-content-center align-items-center`}
            >
              <h5 className="title">Construcción de obra civil</h5>
            </Col>
            <Col
              className={`${styles.service__box} rounded p-4 text-center shadow-lg m-4 d-flex justify-content-center align-items-center`}
            >
              <h5 className="title">Edificación</h5>
            </Col>
            <Col
              className={`${styles.service__box} rounded p-4 text-center shadow-lg m-4 d-flex justify-content-center align-items-center`}
            >
              <h5 className="title">Ingeniería</h5>
            </Col>
            <Col
              className={`${styles.service__box} rounded p-4 text-center shadow-lg m-4 d-flex justify-content-center align-items-center`}
            >
              <h5 className="title">Mantenimiento Civil</h5>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
