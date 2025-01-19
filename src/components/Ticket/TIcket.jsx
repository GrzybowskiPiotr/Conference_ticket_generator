import { useContext } from "react";
import { formContext } from "../../contexts/formContext";
import { useFileReader } from "../../hooks/useFileReader.js";
import { TicketRow } from "../TicetRow/TicketRow.jsx";
import LOGO from "/images/logo-mark.svg";
import GITICON from "/images/icon-github.svg";
import styles from "./Ticket.module.css";
export function Ticket() {
  const [formData] = useContext(formContext);

  const name = formData.get("FullName");
  const gitName = formData.get("GitHubUserName");
  const avatar = formData.get("avatar");

  const { preview } = useFileReader(avatar);

  const paragrafWithImg = (
    <div className={styles.gitName}>
      <img src={GITICON} alt="github icon" />
      <p className="text-preset-6mobile">{gitName}</p>
    </div>
  );

  return (
    <div aria-description="Ticekt image" className={styles.ticektContainer}>
      <div className={styles.ticketDetailsContainer}>
        <TicketRow
          img={{ src: LOGO, alt: "Logo img" }}
          firstParagraph={"Coding Conf"}
          firstParagraphTypoPreset={"text-preset-2_mobile"}
          secondParagraphe={`Jan 31, 2025 / Austin, TX`}
          secondParagrapheTypoPreset={"text-preset-6mobile"}
          isLogo={true}
        />
        <TicketRow
          img={{ src: preview, alt: "Avatar preview" }}
          firstParagraph={name}
          firstParagraphTypoPreset={"text-preset-4mobile"}
          secondParagraphe={paragrafWithImg}
          secondParagrapheTypoPreset={"text-preset-6mobile"}
        />
      </div>
      <div className={`${styles.ticketNumber} text-preset-3_mobile`}>
        ticket nr
      </div>
    </div>
  );
}
