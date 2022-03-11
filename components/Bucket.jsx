import { useDrop } from 'react-dnd'
import { ItemTypes } from './types/ItemTypes'
import Image from 'next/image'
import styles from '../scss/index.module.scss'
import { useMediaQuery } from '@mui/material'

const style = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  color: 'white',
  textAlign: 'center',
  zIndex: '100',
}

export default function Bucket({ selectedImage, phn, setPlaceholderNumber, handleImageClick, type }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: ItemTypes.THUMB,
    // Props to collect
    drop: (item) => ({ name: 'Dustbin', phn: phn }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const isMobile = useMediaQuery('(max-width:600px)')

  const userImageWidth = type === 'normal' ? (isMobile ? 150 : 300) : 150
  const userImageheight = type === 'normal' ? (isMobile ? 100 : 200) : 100

  const isActive = canDrop && isOver
  let backgroundColor = 'rgba(255,255,255,0)'
  if (isActive) {
    backgroundColor = 'rgb(17 255 0 / 28%)'
  } else if (canDrop) {
    backgroundColor = 'rgb(0 67 255 / 28%)'
  }

  return (
    <div ref={drop} className={styles.placeholder} onClick={handleImageClick} role={'Dustbin'}>
      <div style={{ ...style, backgroundColor }}>
        {isActive ? type !== 'thumb' && 'Release to drop' : type !== 'thumb' && 'Drag a box here'}
      </div>
      <Image src={selectedImage} alt="Picture of placeholder" width={userImageWidth} height={userImageheight} />
    </div>
  )
}
