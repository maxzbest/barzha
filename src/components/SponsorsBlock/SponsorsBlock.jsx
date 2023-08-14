import styles from './SponsorsBlock.module.scss';
import ExportedImage from 'next-image-export-optimizer';
import img1 from '../../../public/barzha_sponsors/1.svg';
import img2 from '../../../public/barzha_sponsors/2.svg';
import img3 from '../../../public/barzha_sponsors/3.svg';
// import img4 from '../../../public/barzha_sponsors/4.pdf';
import img5 from '../../../public/barzha_sponsors/5.svg';
import img6 from '../../../public/barzha_sponsors/6.svg';
import img7 from '../../../public/barzha_sponsors/7.svg';
import img8 from '../../../public/barzha_sponsors/8.svg';
import img9 from '../../../public/barzha_sponsors/9.svg';
import img10 from '../../../public/barzha_sponsors/10.svg';
import img11 from '../../../public/barzha_sponsors/11.svg';
import img12 from '../../../public/barzha_sponsors/12.svg';
import img13 from '../../../public/barzha_sponsors/13.svg';
import img14 from '../../../public/barzha_sponsors/14.svg';
import img15 from '../../../public/barzha_sponsors/15.svg';
import img16 from '../../../public/barzha_sponsors/16.svg';
import img17 from '../../../public/barzha_sponsors/17.svg';
import img18 from '../../../public/barzha_sponsors/18.svg';
import img19 from '../../../public/barzha_sponsors/19.svg';
import img20 from '../../../public/barzha_sponsors/20.svg';
import img21 from '../../../public/barzha_sponsors/21.svg';
import img22 from '../../../public/barzha_sponsors/22.png';
import img23 from '../../../public/barzha_sponsors/23.svg';
import img24 from '../../../public/barzha_sponsors/24.svg';
import img25 from '../../../public/barzha_sponsors/25.svg';
import imgVol from '../../../public/barzha_sponsors/volzhanka.jpg';

export const SponsorsBlock = () => {
  return (
    <>
      <div id="2" className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <h2>Спонсоры фестиваля</h2>
        </div>
        <div className={styles.videoWrapper}>
          <div className={styles.row}>
            <ExportedImage
              src={img1}
              alt="Спонсор"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img5}
              alt="Спонсор"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img6}
              alt="Спонсор"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img7}
              alt="Спонсор"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img8}
              alt="Спонсор"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img9}
              alt="Спонсор"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img10}
              alt="Спонсор"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img11}
              alt="Спонсор"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img12}
              alt="Спонсор"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img15}
              alt="Спонсор"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img17}
              alt="Спонсор"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img18}
              alt="Спонсор"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img19}
              alt="Спонсор"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img20}
              alt="Спонсор"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img21}
              alt="Спонсор"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img22}
              alt="Спонсор"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img23}
              alt="Спонсор"
              className={styles.videoImage}
            />
            <ExportedImage
              src={img24}
              alt="Спонсор"
              className={styles.videoImage}
            />
          </div>
          <div className={styles.row}>
            <ExportedImage
              src={img25}
              alt="Спонсор"
              className={styles.videoImage}
            />
            <ExportedImage
              src={imgVol}
              alt="Волжанка"
              className={styles.videoImage}
            />
          </div>
        </div>
      </div>
    </>
  );
};
