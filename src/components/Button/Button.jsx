import styles from "./Button.module.css";
import { forwardRef } from "react";
export const Button = forwardRef(function Button(
  { onClick, children, style, typographyPreset },
  ref
) {
  return (
    <button
      ref={ref}
      className={`${styles.button} ${typographyPreset}`}
      onClick={onClick}
      style={{ ...style }}
    >
      {children}
    </button>
  );
});
