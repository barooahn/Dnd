import { useDrag } from "react-dnd";
import Image from "next/image";
import { ItemTypes } from "./types/ItemTypes";
import styles from "../scss/index.module.scss";
import BackgroundImage from "../images/whiteBackground.jpg";

const style = {
  border: "1px dashed gray",
  cursor: "move",
  borderRadius: "6px"
};

export default function Background({ name, setSelectedBackground }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BACKGROUND,
    item: {
      name,
      src: BackgroundImage.src,
      height: BackgroundImage.height,
      width: BackgroundImage.width
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log("item", item, "dropResult", dropResult);
        setSelectedBackground(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId()
    })
  }));
  const opacity = isDragging ? 0.4 : 1;

  return (
    <div
      className={styles.thumbImage}
      ref={drag}
      role="Background"
      style={{ ...style, opacity }}
      data-testid={`thumb-${name}`}
    >
      <Image
        src={BackgroundImage}
        alt="Picture of the hotel room"
        width={300}
        height={200}
      />
    </div>
  );
}
