import { Container, Row, Col } from "react-bootstrap";
import custom from "./Portfolio.module.scss";

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const portfolio = () => {
  const path = "/images/portfolio";
  const brands = {
    bachoco: { path: `${path}/bachoco/` },
    bosch: { path: `${path}/bosch/` },
    givaudan: { path: `${path}/givaudan/` },
    mazda: { path: `${path}/mazda/` },
    truper: { path: `${path}/truper/` },
    nestle: { path: `${path}/nestle/` },
    purina: { path: `${path}/purina/` },
  };

  const projects = [
    {
      name: "Bachoco",
      path: brands.bachoco.path,
      logo: "bachoco.png",
      title: "Construcción de Barda Perimentral",
      desc: "",
      location: "Corporativo Celaya",
      image: "bachoco-3.jpg",
      images: ["bachoco-2.jpg", "bachoco-1.jpg"],
    },
    {
      name: "Purina",
      path: brands.purina.path,
      logo: "purina.png",
      title: "Edificio Avella",
      desc: "",
      location: "Cuautitlán Izcalli, Edo. de México",
      image: "purina-1.png",
      images: ["purina-2.png", "purina-3.png"],
    },
    {
      name: "Nestlé",
      path: brands.nestle.path,
      logo: "nestle-light.png",
      title: "Construcción de Cuarto CCM",
      desc: "",
      location: "Querétaro, Qro.",
      image: "pro1/nestle-1.jpg",
      images: ["pro1/nestle-2.jpg"],
    },
    {
      name: "Mazda",
      path: brands.mazda.path,
      logo: "mazda.png",
      title: "Piso Nivel Cero” DarkRoom",
      desc: "",
      location: "Planta Salamanca, Gto.",
      image: "mazda-2.jpg",
      images: ["mazda-1.png", "mazda-3.jpg"],
    },
  ];

  return (
    <>
      <SimpleReactLightbox>
        <div className={custom.portfolio__container}>
          <SRLWrapper>
            <Container className="p-4">
              <h1
                className="my-4 title"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Algunos proyectos
              </h1>

              {/* Projects */}
              {projects.map((project, index) => (
                <div
                  className={`${custom.project__container} my-5`}
                  key={index}
                  data-aos="fade-right"
                >
                  <Row>
                    <Col xs={12} md={6} className={`${custom.project__images}`}>
                      <Row>
                        <Col md={12}>
                          <img
                            className="d-block w-100 rounded shadow"
                            src={`${project.path}${project.image}`}
                            alt={`${project.path}${project.image}`}
                            data-aos="fade-in"
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col
                      xs={12}
                      md={6}
                      className={`${custom.project__description} d-flex flex-column justify-content-center`}
                    >
                      {/* Logo */}
                      <div className="w-50 mx-auto mb-5 d-none d-md-block ">
                        <img
                          className="d-block w-100 rounded shadow"
                          src={`${project.path}${project.logo}`}
                          alt={project.name}
                        />
                      </div>
                      <h2 className="my-2 d-block d-md-none title">
                        {project.name}
                      </h2>
                      <h3
                        data-aos="fade-left"
                        data-aos-delay="2000"
                        className="title"
                      >
                        {project.title}
                      </h3>
                      <h6 data-aos="fade-left" data-aos-delay="2000">
                        {project.location}
                      </h6>
                      <p
                        className="py-2"
                        data-aos="fade-left"
                        data-aos-delay="2000"
                      >
                        {project.desc}
                      </p>

                      <Row>
                        {project.images.map((image, index) => (
                          <Col xs={3} key={image + index} className="mb-5">
                            <img
                              className="d-block w-100 rounded shadow"
                              src={`${project.path}${image}`}
                              alt={image}
                              data-aos="fade-down"
                              data-aos-delay="2500"
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
