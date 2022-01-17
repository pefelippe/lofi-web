import styles from "./styles.module.scss";

import { SpotifyBtn } from "../SpotifyBtn";
import Image from "next/image";

export function Menu() {
  return (
    <main className={styles.container}>
      <div className={styles.background}>
        <Image src={"/menu-background.webp"} alt="background" layout="fill" />
      </div>

      <div className={styles.content}>
        <span>
          Meet your new <b>Pomodoro</b> site.
        </span>
      </div>
        <button>Start Now</button>
    </main>
  );
}
