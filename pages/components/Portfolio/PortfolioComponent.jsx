import { Container, Row, Col } from "react-bootstrap";
import custom from "./Portfolio.module.scss";

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const portfolio = () => {
  const path = "/images/portfolio";
  const brands = [
    { name: "bachoco", path: `${path}/bachoco/` },
    { name: "bosch", path: `${path}/bosch/` },
    { name: "givaudan", path: `${path}/givaudan/` },
    { name: "mazda", path: `${path}/mazda/` },
    { name: "truper", path: `${path}/truper/` },
    { name: "nestle", path: `${path}/nestle/` },
    { name: "purina", path: `${path}/purina/` },
  ];

  const projects = [
    {
      name: "purina",
      path: `${path}/purina/`,
      logo: "purina.png",
      title: "Proyecto tal",
      desc: "lorem...",
      location: "Qro",
      image: "purina-1.png",
      images: ["purina-2.png", "purina-3.png"],
    },
  ];

  return (
    <>
      <SimpleReactLightbox>
        <div className={custom.portfolio__container}>
          <SRLWrapper>
            <Container className="p-4">
              <h1 className="my-4 title">Algunos proyectos</h1>

              {/* Projects */}
              {projects.map((project, index) => (
                <div className={`${custom.project__container}`} key={index}>
                  <Row>
                    <Col xs={12} md={6} className={`${custom.project__images}`}>
                      <Row>
                        <Col md={12}>
                          <img
                            className="d-block w-100"
                            src={`${project.path}${project.image}`}
                            alt=""
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col
                      xs={12}
                      md={6}
                      className={`${custom.project__description}`}
                    >
                      <div className="w-50 mx-auto mb-5">
                        <img
                          className="d-block w-100"
                          src={`${project.path}${project.logo}`}
                          alt={project.name}
                        />
                      </div>
                      <h3>{project.title}</h3>
                      <h6>{project.location}</h6>
                      <p className="py-2">{project.desc}</p>

                      <Row>
                        {project.images.map((image, index) => (
                          <Col xs={3} key={image + index}>
                            <img
                              className="d-block w-100"
                              src={`${project.path}${image}`}
                              alt={image}
                            />
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </div>
              ))}
            </Container>
          </SRLWrapper>
        </div>
      </SimpleReactLightbox>
    </>
  );
};

export default portfolio;
