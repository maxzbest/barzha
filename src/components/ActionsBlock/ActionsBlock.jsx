import styles from './ActionsBlock.module.scss';
import ExportedImage from 'next-image-export-optimizer';
import img1 from '../../../public/barzha_actions/1.jpg';
import img2 from '../../../public/barzha_actions/2.jpg';
import img3 from '../../../public/barzha_actions/3.jpg';
import img4 from '../../../public/barzha_actions/4.jpg';
import img5 from '../../../public/barzha_actions/5.jpg';
import img6 from '../../../public/barzha_actions/6.jpg';
import img7 from '../../../public/barzha_actions/7.jpg';
import img8 from '../../../public/barzha_actions/8.jpg';
import img9 from '../../../public/barzha_actions/9.jpg';
import img10 from '../../../public/barzha_actions/10.jpg';
import img11 from '../../../public/barzha_actions/11.jpg';
import img12 from '../../../public/barzha_actions/12.jpg';

export const ActionsBlock = () => {
  return (
    <>
      <div id="3" className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <h2>Также вас ожидают активности от</h2>
        </div>
        <div className={styles.videoWrapper}>
          <div className={styles.row}>
            <ExportedImage
              src={img1}
              alt="Активность 1"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img2}
              alt="Активность 2"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img3}
              alt="Активность 3"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img4}
              alt="Активность 4"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img5}
              alt="Активность 5"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img6}
              alt="Активность 6"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img7}
              alt="Активность 7"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img8}
              alt="Активность 8"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img9}
              alt="Активность 9"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img10}
              alt="Активность 10"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img11}
              alt="Активность 11"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img12}
              alt="Активность 12"
              className={styles.videoImage}
            />
          </div>
        </div>
      </div>
    </>
  );
};
