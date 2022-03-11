import styles from "../../scss/index.module.scss";
import Thumb from "../Thumb";

export default function ThumbsImages({
  setSelectedThumb,
  setPlaceholderNumber
}) {
  return (
    <div className={styles.sideBar}>
      <div className={styles.thumbs}>
        <div>
          <Thumb
            name="test"
            setSelectedThumb={setSelectedThumb}
            setPlaceholderNumber={setPlaceholderNumber}
          />
        </div>
        <div>
          <Thumb
            name="test1"
            setSelectedThumb={setSelectedThumb}
            setPlaceholderNumber={setPlaceholderNumber}
          />
        </div>
        <div>
          <Thumb
            name="test2"
            setSelectedThumb={setSelectedThumb}
            setPlaceholderNumber={setPlaceholderNumber}
          />
        </div>
        <div>
          <Thumb
            name="test3"
            setSelectedThumb={setSelectedThumb}
            setPlaceholderNumber={setPlaceholderNumber}
          />
        </div>
        <div>
          <Thumb
            name="test4"
            setSelectedThumb={setSelectedThumb}
            setPlaceholderNumber={setPlaceholderNumber}
          />
        </div>
      </div>
    </div>
  );
}
