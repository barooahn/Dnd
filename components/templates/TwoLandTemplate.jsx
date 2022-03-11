import styles from '../../scss/index.module.scss'
import Bucket from '../Bucket'
import BackgroundBucket from '../BackgroundBucket'

export default function TwoLandTemplate({
  selectedBackground,
  setPlaceholderNumber,
  placeholder1,
  placeholder2,
  handleImageClick,
  type,
}) {
  return (
    <div className={type === 'thumb' ? styles.mainThumbContainer : styles.mainImageContainer}>
      <div className={styles.imageContainer}>
        <BackgroundBucket selectedBackground={selectedBackground} type={type} />
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Bucket
            selectedImage={placeholder1}
            phn={1}
            setPlaceholderNumber={setPlaceholderNumber}
            handleImageClick={handleImageClick}
            type={type}
          />
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Bucket
            selectedImage={placeholder2}
            phn={2}
            setPlaceholderNumber={setPlaceholderNumber}
            handleImageClick={handleImageClick}
            type={type}
          />
        </div>
      </div>
    </div>
  )
}
