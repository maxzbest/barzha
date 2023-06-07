import styles from './Footer.module.scss';
import ExportedImage from 'next-image-export-optimizer';
import partner1 from '../../../public/allfest.png';

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
          <a
            href="https://allfest.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExportedImage
              src={partner1}
              alt="Allfest"
              className={styles.partnerImage}
              priority
            />
          </a>
        </div>
      </footer>
    </>
  );
};
