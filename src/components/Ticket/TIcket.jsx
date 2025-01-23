import { useContext, useEffect, useState } from "react";
import { formContext } from "../../contexts/formContext";
import { useFileReader } from "../../hooks/useFileReader.jsx";
import { TicketRow } from "../TicetRow/TicketRow.jsx";
import LOGO from "/images/logo-mark.svg";
import GITICON from "/images/icon-github.svg";
import styles from "./Ticket.module.css";

export function Ticket() {
  const [tickedNumber, setTickedNumber] = useState(null);
  const [formData] = useContext(formContext);

  const name = formData["FullName"];
  const gitName = formData["GitHubUserName"];
  const avatar = formData["avatar"];

  const { preview } = useFileReader(avatar);

  const paragrafWithImg = (
    <div className={styles.gitName}>
      <img src={GITICON} alt="github icon" />
      <p className="text-preset-6mobile">{gitName}</p>
    </div>
  );

  useEffect(() => {
    function generateNumber() {
      const uintArray = new Uint8Array(5);
      self.crypto.getRandomValues(uintArray);
      const randomeNumbers = [];
      for (let num of uintArray) {
        randomeNumbers.push(num % 10);
      }
      return randomeNumbers.join("");
    }

    function localStorageToSet(localstorageStr) {
      return new Set(JSON.parse(localstorageStr));
    }
    let generatedNumber = `#${generateNumber()}`;
    let ticketsArray = [];
    if (!localStorage.tickets) {
      ticketsArray.push(generatedNumber);
      localStorage.tickets = JSON.stringify(ticketsArray);
      setTickedNumber(generatedNumber);
    } else {
      const set = localStorageToSet(localStorage.tickets);
      while (set.has(generatedNumber)) {
        generatedNumber = generateNumber();
      }
      set.add(generatedNumber);
      ticketsArray = Array.from(set);
      localStorage.tickets = JSON.stringify(ticketsArray);
      setTickedNumber(generatedNumber);
    }
  }, []);

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
        {tickedNumber}
      </div>
    </div>
  );
}
