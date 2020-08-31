import Head from "next/head";
import styles from "../styles/Home.module.scss";

import Navbar from "./components/Navbar/NavbarComponent";
import Hero from "./components/Hero/HeroComponent";
import About from "./components/About/AboutComponent"
import Services from "./components/Services/ServicesComponent"
import Brand from "./components/Brand/BrandComponent"

export default function Home() {
  return (
    <div className={styles.container}>
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

      <main className={styles.main}>
        <Navbar></Navbar>
        <div className={styles.main__content}>
          <Hero></Hero>
          <About></About>
          <Services></Services>
          <Brand></Brand>
        </div>
      </main>
    </div>
  );
}
