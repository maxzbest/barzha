import styles from './MarketsBlock.module.scss';
import ExportedImage from 'next-image-export-optimizer';
import img1 from '../../../public/barzha_markets/1.jpg';
import img2 from '../../../public/barzha_markets/2.jpg';
import img3 from '../../../public/barzha_markets/3.jpg';
import img4 from '../../../public/barzha_markets/4.jpg';
import img5 from '../../../public/barzha_markets/5.jpg';
import img6 from '../../../public/barzha_markets/6.jpg';
import img7 from '../../../public/barzha_markets/7.jpg';
import img8 from '../../../public/barzha_markets/8.jpg';
import img9 from '../../../public/barzha_markets/9.jpg';
import img10 from '../../../public/barzha_markets/10.jpg';
import img11 from '../../../public/barzha_markets/11.jpg';
import img12 from '../../../public/barzha_markets/12.jpg';
import img13 from '../../../public/barzha_markets/13.jpg';
import img14 from '../../../public/barzha_markets/14.jpg';

export const MarketsBlock = () => {
  return (
    <>
      <div id="5" className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <h2>И крутейшие маркеты от</h2>
        </div>
        <div className={styles.videoWrapper}>
          <div className={styles.row}>
            <ExportedImage
              src={img1}
              alt="Маркет 1"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img2}
              alt="Маркет 2"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img3}
              alt="Маркет 3"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img4}
              alt="Маркет 4"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img5}
              alt="Маркет 5"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img6}
              alt="Маркет 6"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img7}
              alt="Маркет 7"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img8}
              alt="Маркет 8"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img9}
              alt="Маркет 9"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img10}
              alt="Маркет 10"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img11}
              alt="Маркет 11"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img12}
              alt="Маркет 12"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img13}
              alt="Маркет 13"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img14}
              alt="Маркет 14"
              className={styles.videoImage}
            />
          </div>
        </div>
      </div>
    </>
  );
};
