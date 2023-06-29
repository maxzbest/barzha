import styles from './PerformersBlock.module.scss';
import ExportedImage from 'next-image-export-optimizer';
import img1 from '../../../public/barzha_performers/1.jpeg';
import img2 from '../../../public/barzha_performers/2.jpeg';
import img3 from '../../../public/barzha_performers/3.jpeg';
import img4 from '../../../public/barzha_performers/4.jpeg';
import img5 from '../../../public/barzha_performers/5.jpeg';
import img6 from '../../../public/barzha_performers/6.jpeg';
import img7 from '../../../public/barzha_performers/7.jpeg';
import img8 from '../../../public/barzha_performers/8.jpeg';
import img9 from '../../../public/barzha_performers/9.jpeg';
import img10 from '../../../public/barzha_performers/10.jpeg';
import img11 from '../../../public/barzha_performers/11.jpeg';
import img12 from '../../../public/barzha_performers/12.jpeg';
import img13 from '../../../public/barzha_performers/13.jpeg';
import img14 from '../../../public/barzha_performers/14.jpeg';
import img15 from '../../../public/barzha_performers/15.jpeg';
import img16 from '../../../public/barzha_performers/16.jpeg';
import img17 from '../../../public/barzha_performers/17.jpeg';

export const PerformersBlock = () => {
  return (
    <>
      <div id="2" className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <h2>Выступающие</h2>
        </div>
        <div className={styles.videoWrapper}>
          <div className={styles.row}>
            <ExportedImage
              src={img1}
              alt="Музыкальная группа 1"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img2}
              alt="Музыкальная группа 2"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img3}
              alt="Музыкальная группа 3"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img4}
              alt="Музыкальная группа 4"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img5}
              alt="Музыкальная группа 5"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img6}
              alt="Музыкальная группа 6"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img7}
              alt="Музыкальная группа 7"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img8}
              alt="Музыкальная группа 8"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img9}
              alt="Музыкальная группа 9"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img10}
              alt="Музыкальная группа 10"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img11}
              alt="Музыкальная группа 11"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img12}
              alt="Музыкальная группа 12"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img13}
              alt="Музыкальная группа 13"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img14}
              alt="Музыкальная группа 14"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img15}
              alt="Музыкальная группа 15"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img16}
              alt="Музыкальная группа 16"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img17}
              alt="Музыкальная группа 17"
              className={styles.videoImage}
            />
          </div>
        </div>
      </div>
    </>
  );
};
