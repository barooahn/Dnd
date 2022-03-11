import { useDrop } from 'react-dnd'
import { ItemTypes } from './types/ItemTypes'
import Image from 'next/image'
import styles from '../scss/index.module.scss'

const style = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  color: 'white',
  textAlign: 'center',
}

export default function BackgroundBucket({ selectedBackground, type }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: ItemTypes.BACKGROUND,
    // Props to collect
    drop: (item) => ({ name: 'Background' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const isActive = canDrop && isOver
  let backgroundColor = 'rgba(255,255,255,0)'
  if (isActive) {
    backgroundColor = 'rgb(17 255 0 / 28%)'
  } else if (canDrop) {
    backgroundColor = 'rgb(0 67 255 / 28%)'
  }
  return (
    <div ref={drop} className={styles.backgroundContainer} role={'Background'}>
      <div style={{ ...style, backgroundColor }}>
        {isActive ? type !== 'thumb' && 'Release to drop' : type !== 'thumb' && 'Drag a box here'}
      </div>
      {selectedBackground && (
        <Image
          src={selectedBackground}
          alt="Background Image"
          layout={'fill'}
          objectFit={'cover'}
          className={styles.backgroundImage}
        />
      )}
    </div>
  )
}
