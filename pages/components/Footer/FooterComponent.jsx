import { Container, Row, Col } from "react-bootstrap";
import custom from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={`${custom.footer__container} d-flex align-items-center`}>
      <Container className="">
        <Row className="">
          <Col
            xs={12}
            md={6}
            className={"d-flex align-items-center justify-content-center my-2"}
          >
            <p
              className={`${custom.footer__enterprise_name} text m-0 text-center`}
            >
              &copy; 2020 Constructora del bajío S.A. de C.V.
            </p>
          </Col>
          <Col
            xs={12}
            md={6}
            className={"d-flex align-items-center justify-content-center my-2"}
          >
            <a
              href="https://pinka.codes/"
              target="_blank"
              className={`${custom.footer__pincoders} title`}
            >
              Made by <span>Pink Coders</span>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
