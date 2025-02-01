import style from "./SubmitedHeading.module.css";
export function SubmitedHeading({ firstName, lastName }) {
  return (
    <>
      Congrats, <span className={style.name}>{firstName}</span>
      {<br />}
      <span className={style.name}> {lastName}</span>! Your ticket is ready.
    </>
  );
}
