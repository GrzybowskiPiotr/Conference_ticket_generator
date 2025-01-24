import { useState } from "react";
import { UploadedImageView } from "../UploadedImageView/UploadedImageView.jsx";
import { UploadButton } from "../UploadButton/UploadButton.jsx";
import { useFileReader } from "../../hooks/useFileReader.js";
import INFO_ICON from "/images/icon-info.svg";
import style from "./UploadImage.module.css";

export function UploadImage({
  onClick,
  file,
  setFile,
  removeButtonClickHandler,
  error,
}) {
  const [isDragOver, setIsdragOver] = useState(false);
  const { preview } = useFileReader(file);

  function handleDrop(e) {
    e.preventDefault();
    setIsdragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setFile(file);
    }
  }
  console.log(error?.ref);
  return (
    <div className={`${style.uploadContainer} `}>
      <h2 className={`text-preset-5`}>Upload Avatar</h2>
      <div
        className={`${style.uploadArea} ${isDragOver ? style.dragOver : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsdragOver(true);
        }}
        onDragLeave={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setIsdragOver(false);
        }}
        onDrop={handleDrop}
      >
        {preview ? (
          <UploadedImageView
            removeButtonClickHandler={removeButtonClickHandler}
            onClick={onClick}
            preview={preview}
          />
        ) : (
          <UploadButton onClick={onClick} />
        )}
      </div>
      {!preview && (
        <div className={`${style.info} ${error ? style.errorInfo : ""}`}>
          <img src={INFO_ICON} alt="info icon" />
          <p className="text-preset-7" id="avatar-hint">
            {error
              ? error.message
              : "Upload your photo (JPG or PNG, max size: 500KB)."}
          </p>
        </div>
      )}
    </div>
  );
}
