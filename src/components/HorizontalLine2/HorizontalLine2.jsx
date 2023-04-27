import styles from "./HorizontalLine2.module.css";

export const HorizontalLine2 = (props) => {
  // return props;
  return (
    <>
      <div id="2" className={styles.wrapper}>
        <div className={styles.marqueeContainer}>
          <div className={styles.marquee}>
            <span>
              <b className={styles.b}>Баржа Live!</b>
            </span>
          </div>
          <div className={styles.marquee}>
            <span>
              <b className={styles.b}>Баржа Live!</b>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
