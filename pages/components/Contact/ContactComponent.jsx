import custom from "./Contact.module.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <div className={`${custom.contact__container}`}>
      <div className={`${custom.skewed}`}></div>
      <Container className={``}>
        {/* Contact header */}
        <Row>
          <Col>
            <header>
              <h1 className="title" data-aos="fade-right">
                Contáctanos
              </h1>
            </header>
          </Col>
        </Row>

        {/* Contact content */}
        <div className="contact__content">
          {/* Form row */}
          <Row>
            <Col xm={12} sm={12} lg={6} className="pb-5">
              <Form>
                <Form.Group controlId="form__name">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>

                <Form.Group controlId="form__email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu email" />
                  <Form.Text className="text-muted">
                    Jamás compartiremos tu email con alguien más
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="form__message">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </Form>
            </Col>
            <Col
              xm={12}
              sm={12}
              lg={6}
              className="pb-5 d-flex justify-content-center align-items-center"
            >
              <Container>
                <Row>
                  <Col xs={12} className="my-2">
                    <address>
                      <svg
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 16 16"
                        class="bi bi-envelope-fill"
                        fill="#131c97"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                        />
                      </svg>

                      <a
                        href="mailto:ventas.constructoradelbajio@gmail.com"
                        className="ml-3"
                      >
                        ventas.constructoradelbajio@gmail.com
                      </a>
                    </address>
                  </Col>
                  <Col xs={12} className="my-2">
                    <address>
                      <svg
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 16 16"
                        class="bi bi-telephone"
                        fill="#131c97"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                      </svg>
                      <a href="tel:+13115552368" className="ml-3">
                        (311) 555-2368
                      </a>
                    </address>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
