import styles from "./HorizontalLine1.module.css";

export const HorizontalLine1 = (props) => {
  // return props;
  return (
    <>
      <div id="1" className={styles.wrapper}>
        <div className={styles.marqueeContainer}>
          <div className={styles.marquee}>
            <span>
              <b className={styles.b}>Июль 2023</b>
            </span>
          </div>
          <div className={`${styles.marquee} ${styles.marquee2}`}>
            <span>
              <b className={styles.b}>Июль 2023</b>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
