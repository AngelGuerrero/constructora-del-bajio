import { Container, Row, Col } from "react-bootstrap";
import custom from "./About.module.scss";

export default function About() {
  return (
    <div className={`${custom.about__container}`}>
      <Container>
        <Row>
          <Col data-aos="fade-down">
            <p className={`text`}>
              Constructora del Bajío es una empresa que forma parte del Grupo
              Avefénix SA de CV, empresa con gran experiencia y profesionalismg
              en el ramo de la construcción y mantenimiento industrial.
            </p>
          </Col>
        </Row>
        <Row className={`py-4 my-5`}>
          <Col sm={12} md={12} lg={6} className="mb-5" data-aos="fade-down">
            <h1 className={`title text-white text-center`}>Misión</h1>
            <p className="text text-justify">
              Ser vistos como el proveedor de Construcción Civil de Máximo Valor
              para cada segmento de mercado al que servimos. Experimentaremos la
              alegría que procede del avance, la aplicación y cumplimiento
              íntegro de las expectativas del cliente.
            </p>
          </Col>
          <Col sm={12} md={12} lg={6} data-aos="fade-down">
            <h1 className={`title text-white text-center`}>Visión</h1>
            <p className="text text-justify">
              Nos enfocamos a cubrir y sobrepasar expectativas del cliente en un
              marco de altos parámetros de calidad y seguridad. Con el adecuado
              balance costo-beneficio, entregado en tiempo y forma pactados,
              mediante una capacidad técnica autorizada. Destacar siempre por
              nuestra alta vocación de servicio y ética profesional.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
