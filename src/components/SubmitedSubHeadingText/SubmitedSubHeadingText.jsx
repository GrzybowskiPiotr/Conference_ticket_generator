import style from "./SubmitedSubHeadingText.module.css";
export function SubmitedSubHeadingText({ email }) {
  return (
    <>
      {"We've emailed your ticket to"}{" "}
      <span className={style.email}>{email}</span> and will send updates in the
      run up to the event.
    </>
  );
}
