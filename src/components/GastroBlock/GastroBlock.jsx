import styles from './GastroBlock.module.scss';
import ExportedImage from 'next-image-export-optimizer';
import img1 from '../../../public/barzha_gastro/1.jpg';
import img2 from '../../../public/barzha_gastro/2.jpg';
import img3 from '../../../public/barzha_gastro/3.jpg';
import img4 from '../../../public/barzha_gastro/4.jpg';
import img5 from '../../../public/barzha_gastro/5.jpg';
import img6 from '../../../public/barzha_gastro/6.jpg';
import img7 from '../../../public/barzha_gastro/7.jpg';
import img8 from '../../../public/barzha_gastro/8.jpg';
import img9 from '../../../public/barzha_gastro/9.jpg';
import img10 from '../../../public/barzha_gastro/10.jpg';
import img11 from '../../../public/barzha_gastro/11.jpg';
import img12 from '../../../public/barzha_gastro/12.jpg';
import img13 from '../../../public/barzha_gastro/13.jpg';
import img14 from '../../../public/barzha_gastro/13.jpg';
import img15 from '../../../public/barzha_gastro/15.jpg';

export const GastroBlock = () => {
  return (
    <>
      <div id="4" className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <h2>Вкуснейшие блюда от</h2>
        </div>
        <div className={styles.videoWrapper}>
          <div className={styles.row}>
            <ExportedImage
              src={img1}
              alt="Гастро 1"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img2}
              alt="Гастро 2"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img3}
              alt="Гастро 3"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img4}
              alt="Гастро 4"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img5}
              alt="Гастро 5"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img6}
              alt="Гастро 6"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img7}
              alt="Гастро 7"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img8}
              alt="Гастро 8"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img9}
              alt="Гастро 9"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img10}
              alt="Гастро 10"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img11}
              alt="Гастро 11"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img12}
              alt="Гастро 12"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img13}
              alt="Гастро 13"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img14}
              alt="Гастро 14"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img15}
              alt="Гастро 15"
              className={styles.videoImage}
            />
          </div>
        </div>
      </div>
    </>
  );
};
