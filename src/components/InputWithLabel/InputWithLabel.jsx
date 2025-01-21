import style from "./InputWithLabel.module.css";
export function InputWithLabel({
  label,
  id,
  formRegister,
  placeholder,
  type = "text",
  error,
}) {
  return (
    <>
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
      {error && <p>Dupa</p>}
    </>
  );
}
