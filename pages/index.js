import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Constructora del bajío S.A. de C.V.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Constructora del bajío S.A. de C.V.</h1>
        <h4>Sitio web en construcción</h4>
      </main>
    </div>
  );
}
