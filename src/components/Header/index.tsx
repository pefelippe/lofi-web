import styles from "./styles.module.scss";

import { SpotifyBtn } from "../SpotifyBtn";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <span>Pomodoro.lofi</span>
        <SpotifyBtn />
      </div>
    </header>
  );
}
