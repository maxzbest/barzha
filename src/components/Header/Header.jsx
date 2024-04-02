import styles from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <header className={styles.headerWrapper}>
        <nav className={styles.headerNav}>
          <ul className={styles.headerNavList}>
            <li className={styles.headerNavListItem}>
              <a href="#1" className={styles.headerNavListItemLink}>
                О&nbsp;фестивале
              </a>
            </li>
            <li className={styles.headerNavListItem}>
              <a href="#2" className={styles.headerNavListItemLink}>
                Артисты
              </a>
            </li>
            <li className={styles.headerNavListItem}>
              <a href="#3" className={styles.headerNavListItemLink}>
                Активности
              </a>
            </li>
            <li className={styles.headerNavListItem}>
              <a href="#4" className={styles.headerNavListItemLink}>
                Гастро
              </a>
            </li>
            <li className={styles.headerNavListItem}>
              <a href="#5" className={styles.headerNavListItemLink}>
                Маркеты
              </a>
            </li>
            <li className={styles.headerNavListItem}>
              <a href="#6" className={styles.headerNavListItemLink}>
                Место
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="https://vk.com/barzha.live"
          className={styles.requestLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Мы&nbsp;в&nbsp;ВК
        </a>
        <span
          // href="https://simbilet.ru/vse-kategorii/konczertyi/drugoe/muzyikalnyijfestivalbarzhalive"
          className={styles.buyLink}
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Купить&nbsp;билеты (скоро)
        </span>
      </header>
      <div className={styles.headerImageWrapper} />
    </>
  );
};
