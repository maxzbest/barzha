import styles from './PerformersBlock.module.scss';
import ExportedImage from 'next-image-export-optimizer';
import img from '../../../public/band.png';

export const PerformersBlock = () => {
  return (
    <>
      <div id="2" className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <h2>Выступающие</h2>
          <p>
            Следите за новостями о хэдлайнерах, а также ходом подготовки
            фестиваля в нашей группе в ВК{' '}
            <a className={styles.vkLink} href="https://vk.com/barzha.live">
              БАРЖА LIVE!
            </a>
          </p>
        </div>
        <div className={styles.videoWrapper}>
          <ExportedImage
            src={img}
            alt="Музыкальная группа"
            className={styles.videoImage}
            priority
          />
        </div>
      </div>
    </>
  );
};
