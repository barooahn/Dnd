import styles from "../../scss/index.module.scss";
import Background from "../Background";

export default function BackgroundThumbs({ setSelectedBackground }) {
  return (
    <div className={styles.sideBar}>
      <div className={styles.thumbs}>
        <div>
          <Background
            name="btest"
            setSelectedBackground={setSelectedBackground}
          />
        </div>
        <div>
          <Background
            name="btest1"
            setSelectedBackground={setSelectedBackground}
          />
        </div>
        <div>
          <Background
            name="btest2"
            setSelectedBackground={setSelectedBackground}
          />
        </div>
        <div>
          <Background
            name="btest3"
            setSelectedBackground={setSelectedBackground}
          />
        </div>
        <div>
          <Background
            name="btest4"
            setSelectedBackground={setSelectedBackground}
          />
        </div>
      </div>
    </div>
  );
}
