import Image from "next/image";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <header className={styles.headerWrapper}>
        <nav className={styles.headerNav}>
          <ul className={styles.headerNavList}>
            <li className={styles.headerNavListItem}>
              <a href="#1" className={styles.headerNavListItemLink}>
                О фестивале
              </a>
            </li>
            <li className={styles.headerNavListItem}>
              <a href="#2" className={styles.headerNavListItemLink}>
                Артисты
              </a>
            </li>
            <li className={styles.headerNavListItem}>
              <a href="#3" className={styles.headerNavListItemLink}>
                Место
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="https://vk.com/topic-219089516_49075521"
          className={styles.requestLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Подать заявку
        </a>
        <a
          href="https://ya.ru"
          className={styles.buyLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Купить билеты
        </a>
      </header>
      <div className={styles.headerImageWrapper} />
    </>
  );
};
