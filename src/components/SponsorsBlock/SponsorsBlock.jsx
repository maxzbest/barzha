import styles from './SponsorsBlock.module.scss';
import ExportedImage from 'next-image-export-optimizer';
import img1 from '../../../public/barzha_actions/Brevoll.jpg';
import img2 from '../../../public/barzha_actions/Deus Space.jpg';
import img3 from '../../../public/barzha_actions/MANIA.DREADS и MIME_DREADS.jpg';
import img4 from '../../../public/barzha_actions/Next Level.jpg';
import img5 from '../../../public/barzha_actions/The Seven.jpg';
import img6 from '../../../public/barzha_actions/Лаборатория тату.jpg';
import img7 from '../../../public/barzha_actions/ЛОВИ МОМЕНТ73.jpg';
import img8 from '../../../public/barzha_actions/Молодёжный Экосовет.jpg';
import img9 from '../../../public/barzha_actions/Ресурсный Центр Развития.jpg';
import img10 from '../../../public/barzha_actions/стрит-арт площадкa.jpg';
import img11 from '../../../public/barzha_actions/Ульяновская группа по капоэйре Capoeira team.jpg';
import img12 from '../../../public/barzha_actions/Центр здоровья ПравИло.jpg';

export const SponsorsBlock = () => {
  return (
    <>
      <div id="2" className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <h2>Также вас ожидают активности от</h2>
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
          {/* <div className={styles.row}>
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
          </div> */}
        </div>
      </div>
    </>
  );
};
