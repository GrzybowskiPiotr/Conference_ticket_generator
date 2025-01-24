import { useWindowWidth } from "../../hooks/useWindowWidth.js";
import style from "./Heading.module.css";

export function Heading({ mode, email, name }) {
  const width = useWindowWidth();

  let HedingtypoGraphypreset = "";
  let subHEadingTypographyPreset = "";
  if (width < 768) {
    HedingtypoGraphypreset = "text-preset-1_mobile";
    subHEadingTypographyPreset = "text-preset-4mobile";
  } else if (768 <= width < 992) {
    HedingtypoGraphypreset = "text-preset-1";
    subHEadingTypographyPreset = "text-preset-4";
  }

  const InitSubHeadingText =
    "Secure your spot at next year's biggest coding conference.";

  const SubmitedSubHeadingText = ({ email }) => (
    <>
      {"We've emailed your ticket to"}{" "}
      <span className={style.email}>{email}</span> and will send updates in the
      run up to the event.
    </>
  );

  const InitialHeading = "Your Journey to Coding Conf 2025 Starts Here!";

  const SubmitedHEading = ({ name }) => (
    <>
      Congrats, <span className={style.name}>{name[0]}</span>
      {<br />}
      <span className={style.name}>{name[1]}</span>! Your ticket is ready.
    </>
  );

  return (
    <>
      <h1 className={`${style.heading} ${HedingtypoGraphypreset}`}>
        {mode !== "submited" ? (
          InitialHeading
        ) : (
          <SubmitedHEading name={name.split(" ")} />
        )}
      </h1>
      <p className={subHEadingTypographyPreset}>
        {mode !== "submited" ? (
          InitSubHeadingText
        ) : (
          <SubmitedSubHeadingText email={email} />
        )}
      </p>
    </>
  );
}
