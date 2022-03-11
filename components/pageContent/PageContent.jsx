import TwoLandTemplate from '../../components/templates/TwoLandTemplate'
import OneLandTemplate from '../../components/templates/OneLandTemplate'
import OneLandTextTemplate from '../../components/templates/OneLandTextTemplate'
import styles from './pageContent.module.scss'
import { useMediaQuery } from '@mui/material'

export default function PageContent({
  selectedTemplate,
  selectedBackground,
  setPlaceholderNumber,
  placeholder1,
  placeholder2,
  handleImageClick,
  title,
  type,
}) {
  const isMobile = useMediaQuery('(max-width:600px)')

  const userImageWidth = isMobile ? 300 : 700
  const userImageheight = isMobile ? 300 : 700

  return (
    <div style={{ height: userImageheight, width: userImageWidth }} className={styles.mainContainer}>
      {selectedTemplate === 'TwoLandTemplate' && (
        <TwoLandTemplate
          selectedBackground={selectedBackground}
          setPlaceholderNumber={setPlaceholderNumber}
          placeholder1={placeholder1}
          placeholder2={placeholder2}
          handleImageClick={handleImageClick}
          type={type}
        />
      )}
      {selectedTemplate === 'OneLandTemplate' && (
        <OneLandTemplate
          selectedBackground={selectedBackground}
          setPlaceholderNumber={setPlaceholderNumber}
          placeholder1={placeholder1}
          handleImageClick={handleImageClick}
          type={type}
        />
      )}
      {selectedTemplate === 'OneLandTextTemplate' && (
        <OneLandTextTemplate
          selectedBackground={selectedBackground}
          setPlaceholderNumber={setPlaceholderNumber}
          placeholder1={placeholder1}
          handleImageClick={handleImageClick}
          title={title}
          type={type}
        />
      )}
    </div>
  )
}
