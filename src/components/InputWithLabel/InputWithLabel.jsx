import style from "./InputWithLabel.module.css";
import INFO_ICON from "/images/icon-info.svg";
export function InputWithLabel({
  label,
  id,
  formRegister,
  placeholder,
  type = "text",
  error,
}) {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <input
          placeholder={placeholder}
          className="text-preset-5"
          type={type}
          id={id}
          {...formRegister}
        />
      </label>
      {error && (
        <p className={`${style.errorP} text-preset-7`}>
          <img src={INFO_ICON} alt="info icon" />
          {error.message}
        </p>
      )}
    </div>
  );
}
