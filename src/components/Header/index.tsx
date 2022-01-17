import { SpotifyBtn } from "../SpotifyBtn";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <span>Pomodoro.lofi</span>
        <nav>
          <a>Home</a>
          <a>Pomodoro</a>
        </nav>
        <SpotifyBtn />
      </div>
    </header>
  );
}
