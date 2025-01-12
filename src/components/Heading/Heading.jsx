import style from "./Heading.module.css";
export function Heading({ mode }) {
  return (
    <>
      <h1 className={`${style.heading} text-preset-1_mobile`}>
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p className="text-preset-4mobile">
        Secure your spot at next year's biggest coding conference.
      </p>
    </>
  );
}
