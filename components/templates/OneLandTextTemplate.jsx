import styles from "../../scss/index.module.scss";
import Bucket from "../Bucket";
import BackgroundBucket from "../BackgroundBucket";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function OneLandTextTemplate({
  selectedBackground,
  setPlaceholderNumber,
  placeholder1,
  title,
  handleImageClick
}) {
  console.log("title", title);
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
          <Typography component="div" style={{ zIndex: 1000 }}>
            <Box sx={{ textAlign: "center", m: 1, typography: "h1" }}>
              {title}
            </Box>
          </Typography>
        </div>
      </div>
    </div>
  );
}
