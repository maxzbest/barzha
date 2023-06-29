import styles from './MapBlock.module.scss';

export const MapBlock = () => {
  return (
    <>
      <div id="3" className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <h2>Как добраться</h2>
          <p>г. Ульяновск, Ульяновский Речной порт, ул. Портовая, 25</p>
        </div>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A4127b9027e8f8234615191cb278aa59803b9afba114234acbe14155a313dad74&amp;source=constructor"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};
