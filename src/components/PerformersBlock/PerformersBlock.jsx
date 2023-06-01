import styles from './PerformersBlock.module.scss';
import Image from 'next/image';

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
          <Image
            src="/band.jpg"
            alt="Музыкальная группа"
            className={styles.videoImage}
            width={100}
            height={100}
            priority
          />
        </div>
      </div>
    </>
  );
};
