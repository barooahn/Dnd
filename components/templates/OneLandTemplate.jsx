import styles from "../../scss/index.module.scss";
import Bucket from "../Bucket";
import BackgroundBucket from "../BackgroundBucket";

export default function TwoLandTemplate({
  selectedBackground,
  setPlaceholderNumber,
  placeholder1,
  handleImageClick
}) {
  return (
    <div className={styles.mainImageContainer}>
      <div className={styles.imageContainer}>
        <BackgroundBucket selectedBackground={selectedBackground} />
        <div style={{ overflow: "hidden", clear: "both" }}>
          <Bucket
            selectedImage={placeholder1}
            phn={1}
            setPlaceholderNumber={setPlaceholderNumber}
            handleImageClick={handleImageClick}
          />
        </div>
      </div>
    </div>
  );
}
