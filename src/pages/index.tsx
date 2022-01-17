import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Menu } from "../components/Menu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pomodoro Lo-fi</title>
      </Head>
      <div className={styles.container}>
        <Menu />
      </div>
    </>
  );
}
