import { useDrag } from "react-dnd";
import Image from "next/image";
import { ItemTypes } from "./types/ItemTypes";
import styles from "../scss/index.module.scss";
import ThumbImage from "../images/0.jpg";

const style = {
  border: "1px dashed gray",
  cursor: "move",
  borderRadius: "6px"
};

export default function Thumb({
  name,
  setSelectedThumb,
  setPlaceholderNumber
}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.THUMB,
    item: {
      name,
      src: ThumbImage.src,
      height: ThumbImage.height,
      width: ThumbImage.width
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log("item", item, "dropResult", dropResult);
        setPlaceholderNumber(dropResult.phn);
        setSelectedThumb(item);
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
      role="Thumb"
      style={{ ...style, opacity }}
      data-testid={`thumb-${name}`}
    >
      <Image
        src={ThumbImage}
        alt="Picture of the hotel room"
        width={300}
        height={200}
      />
    </div>
  );
}
