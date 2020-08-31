import { Container, Row, Col } from "react-bootstrap";

import styles from "./Brand.module.scss";

export default function Brand() {
  const path = "/images/portfolio";
  const brands = [
    `${path}/bachoco/bachoco.png`,
    `${path}/bosch/bosch.png`,
    `${path}/givaudan/givaudan.svg`,
    `${path}/mazda/mazda.png`,
    `${path}/international/international.png`,
    `${path}/nestle/nestle.png`,
    `${path}/purina/purina.png`,
    `${path}/liverpool/liverpool.png`,
    `${path}/trw/trw.png`,
    `${path}/unilever/unilever.png`,
    `${path}/valeo/valeo.svg`,
    `${path}/truper/truper.png`,
  ];

  const images = brands.map((image, index) => (
    <Col
      key={index}
      xs={6}
      sm={6}
      md={6}
      lg={3}
      className={`${styles.brand__col} d-flex justify-content-center align-items-center mb-4`}
    >
      <img className="d-block w-100" src={image} alt={image} srcSet={image} />
    </Col>
  ));

  return (
    <div className={`${styles.brands__container}`}>
      <Container className="p-4">
        <h1 className="title text-center mb-5">Algunos de nuestros clientes</h1>
        <Row>{images}</Row>
      </Container>
    </div>
  );
}
