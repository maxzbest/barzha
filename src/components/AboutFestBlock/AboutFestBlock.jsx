import styles from "./AboutFestBlock.module.css";
import Image from "next/image";

export const AboutFestBlock = () => {
  return (
    <>
      <div id="1" className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <h2>
            Лето. Волга. Баржа.
            <br />И очень много музыки!
          </h2>
          <p>
            Киловатты звука, крутые хедлайнеры, ты и твои друзья - все это
            слагаемые музыкального фестиваля «Баржа Live»
          </p>
        </div>
        <div className={styles.videoWrapper}>
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            width="600"
            height="300"
          ></iframe>
        </div>
      </div>
    </>
  );
};
