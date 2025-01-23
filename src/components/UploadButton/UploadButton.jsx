import UPLOAD_ICON from "/images/icon-upload.svg";
import style from "./UploadButton.module.css";
export function UploadButton({ onClick }) {
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        className={style.button}
      >
        <img src={UPLOAD_ICON} alt="upload icon" />
      </button>
      <p className="text-preset-6">Drag and drop or click to upload</p>
    </>
  );
}
