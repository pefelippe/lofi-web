import styles from "./styles.module.scss";

import { FaSpotify } from "react-icons/fa";

export function SpotifyBtn() {
  return (
    <button className={styles.spotifyBtn} type="button">
      <FaSpotify />
      Sign in with Spotify
    </button>
  );
}
