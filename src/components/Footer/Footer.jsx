import Image from 'next/image';
import styles from './Footer.module.scss';

export const Footer = props => {
  // return props;
  return (
    <>
      <footer className={styles.footerWrapper}>
        <a
          href="https://simbilet.ru/vse-kategorii/konczertyi/drugoe/muzyikalnyijfestivalbarzhalive"
          className={styles.buyLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Купить билеты
        </a>
        <div>
          Музыкальным группам{' '}
          <a className={styles.mailLink} href="mailto:901_km@mail.ru">
            901_km@mail.ru
          </a>
          <br />
          <br />
          По вопросам аккредитации{' '}
          <a className={styles.mailLink} href="mailto:dszm73@yandex.ru">
            dszm73@yandex.ru
          </a>
        </div>
      </footer>
    </>
  );
};
