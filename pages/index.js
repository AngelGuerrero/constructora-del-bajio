import Head from "next/head";
import custom from "../styles/Home.module.scss";

import Navbar from "./components/Navbar/NavbarComponent";
import Hero from "./components/Hero/HeroComponent";
import About from "./components/About/AboutComponent";
import Services from "./components/Services/ServicesComponent";
import Brand from "./components/Brand/BrandComponent";
import Portfolio from "./components/Portfolio/PortfolioComponent";
import Contact from "./components/Contact/ContactComponent";
import Footer from "./components/Footer/FooterComponent";


const Home = () => { 
  return (
    <>
      <Head>
        <title>Constructora del bajío S.A. de C.V.</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={custom.main}>
        <Navbar></Navbar>
        <div className={custom.main__content}>
          <Hero></Hero>
          <About></About>
          <Services></Services>
          <Brand></Brand>
          <Portfolio></Portfolio>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </main>
    </>
  );
}

export default Home