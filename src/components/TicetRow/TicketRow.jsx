import styles from "./TicketRow.module.css";
export function TicketRow({
  img,
  firstParagraph,
  secondParagraphe,
  isLogo,
  firstParagraphTypoPreset,
  secondParagrapheTypoPreset,
}) {
  return (
    <div className={styles.details}>
      <img
        src={img.src}
        alt={img.alt}
        className={isLogo ? styles.logo : styles.img}
      />
      <div className={styles.text}>
        <p className={firstParagraphTypoPreset}>{firstParagraph}</p>
        <div className={secondParagrapheTypoPreset}>{secondParagraphe}</div>
      </div>
    </div>
  );
}
