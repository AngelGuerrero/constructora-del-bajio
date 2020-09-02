import { Container, Row, Col } from "react-bootstrap";
import custom from "./Navbar.module.scss";

export default function Navbar() {
  const menu_items = [
    { title: "inicio", link: "#" },
    { title: "nosotros", link: "#" },
    { title: "servicios", link: "#" },
    { title: "clientes", link: "#" },
    { title: "portafolio", link: "#" },
    { title: "contacto", link: "#" },
  ];

  // Menu in small screen
  const sm_menu = (
    <Row>
      <Col xs={6} sm={6} md={4}>
        <div className="h-100 d-flex justify-content-start align-items-center">
          <img
            src="/images/logo/logo.png"
            className={`${custom.img} `}
            alt="logo"
            srcSet="/images/logo/logo.png"
          />
        </div>
      </Col>
      <Col xs={6} sm={6} md={4}>
        <div className="h-100 d-flex justify-content-end align-items-center">
          <img
            src="/images/menu_hamburguer.png"
            className={`${custom.img__menu} `}
            alt="menu"
            srcSet="/images/menu_hamburguer.png"
          />
        </div>
      </Col>
    </Row>
  );

  // Menu in laptop screen
  const md_menu = (
    <div
      className={`${custom.md_nav_menu} h-100 d-flex flex-column justify-content-between`}
    >
      <div className="h-25 d-flex justify-content-center align-items-center">
        <img
          className="d-block w-100"
          src="/images/logo/logo_nombre.png"
          alt="logo con nombre"
        />
      </div>
      <div className="h-50">
        <ul className={custom.md_menu__items_container}>
          {menu_items.map((item, index) => (
            <li key={index} className={custom.md_menu_item}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  return (
    <nav className={`${custom.nav}`}>
      <Container fluid className="h-100">
        <div className="d-block d-md-none">{sm_menu}</div>
        <div className="d-none d-md-block h-100">{md_menu}</div>
      </Container>
    </nav>
  );
}
