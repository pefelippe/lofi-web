import styles from "./styles.module.scss";

import { FaSpotify } from "react-icons/fa";

import { signIn, signOut, useSession } from "next-auth/react";

export function SpotifyBtn() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <div>
      {!session ? (
        <button onClick={signIn} className={styles.spotifyBtn} type="button">
          <FaSpotify />
          Sign in with Spotify
        </button>
      ) : (
        <button onClick={signOut} type="button">
          {session.user.name}
        </button>
      )}
    </div>
  );
}
