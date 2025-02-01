import { useWindowWidth } from "../../hooks/useWindowWidth.js";
import { SubmitedSubHeadingText } from "../SubmitedSubHeadingText/SubmitedSubHeadingText.jsx";
import { SubmitedHeading } from "../SubmitedHeading/SubmitedHeading.jsx";
import style from "./Heading.module.css";

export function Heading({ mode, email, name }) {
  const width = useWindowWidth();
  const isSubmitted = mode === "submited";
  let HeadingTypographyPreset = "";
  let subHeadingTypographyPreset = "";
  if (width < 768) {
    HeadingTypographyPreset = "text-preset-1_mobile";
    subHeadingTypographyPreset = "text-preset-4mobile";
  } else if (width >= 768 && width < 992) {
    HeadingTypographyPreset = "text-preset-1";
    subHeadingTypographyPreset = "text-preset-4";
  }

  const InitSubHeadingText =
    "Secure your spot at next year's biggest coding conference.";

  const InitialHeading = "Your Journey to Coding Conf 2025 Starts Here!";

  const [firstName, lastName] = name ? name.split(" ") : "";

  return (
    <header>
      <h1 className={`${style.heading} ${HeadingTypographyPreset}`}>
        {isSubmitted ? (
          <SubmitedHeading firstName={firstName} lastName={lastName} />
        ) : (
          InitialHeading
        )}
      </h1>
      <p className={subHeadingTypographyPreset}>
        {isSubmitted ? (
          <SubmitedSubHeadingText email={email} />
        ) : (
          InitSubHeadingText
        )}
      </p>
    </header>
  );
}
