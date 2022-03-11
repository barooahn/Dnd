import styles from "../../scss/index.module.scss";
import Image from "next/image";
import TemplateImage from "../../images/template.jpg";

export default function TemplateThumbs({ setSelectedTemplate }) {
  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className={styles.sideBar}>
      <div className={styles.thumbs}>
        <Image
          src={TemplateImage}
          alt="Picture of the hotel room"
          width={300}
          height={200}
          onClick={() => handleTemplateClick("OneLandTemplate")}
        />
        <Image
          src={TemplateImage}
          alt="Picture of the hotel room"
          width={300}
          height={200}
          onClick={() => handleTemplateClick("OneLandTextTemplate")}
        />
        <Image
          src={TemplateImage}
          alt="Picture of the hotel room"
          width={300}
          height={200}
          onClick={() => handleTemplateClick("TwoLandTemplate")}
        />
      </div>
    </div>
  );
}
