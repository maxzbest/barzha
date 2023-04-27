import Image from "next/image";
import styles from "./Footer.module.css";

export const Footer = (props) => {
  // return props;
  return (
    <>
      <footer className={styles.footerWrapper}>
        <a
          href="https://ya.ru"
          className={styles.buyLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Купить билеты
        </a>
      </footer>
    </>
  );
};
