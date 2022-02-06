import Image from "next/image";
import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";

export function Menu() {
  const { data: session } = useSession();

  return (
    <main className={styles.container}>
      <div className={styles.background}>
        <Image src={"/menu-background.webp"} alt="background" layout="fill" />
      </div>

      <div className={styles.content}>
        {!session ? (
          <span>
            Meet your new <b>Pomodoro</b> site.
          </span>
        ) : (
          <>
            <span>Logado</span>
          </>
        )}
      </div>
    </main>
  );
}
