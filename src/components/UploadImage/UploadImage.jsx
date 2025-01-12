import style from "./UploadImage.module.css";
import UPLOAD_ICON from "/images/icon-upload.svg";
import INFO_ICON from "/images/icon-info.svg";
import { forwardRef, useState } from "react";

export const UploadImage = forwardRef(function UploadImage(
  { onClick, file, setFile },
  ref
) {
  const [preview, setPreview] = useState(null);
  const [isDragOver, setIsdragOver] = useState(false);

  function handleDrop(e) {
    e.preventDefault();
    setIsdragOver(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      setFile(file);
      handleFile(file);
    }
  }

  function handleFile(file) {
    if (
      file.size > 500 * 1024 ||
      !["image/jpeg", "image/png"].includes(file.type)
    ) {
      alert("file must by in .jpeg or .png and be max 500Kb");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  }
  const uploadButton = (
    <>
      <button ref={ref} onClick={onClick}>
        <img src={UPLOAD_ICON} alt="upload icon" />
      </button>
      <p className="text-preset-6">Drag and drop or click to upload</p>
    </>
  );

  if (file) {
    handleFile(file);
  }

  return (
    <div
      className={`${style.uploadContainer} `}
      onDragOver={(e) => {
        e.preventDefault();
        setIsdragOver(true);
      }}
      onDragLeave={() => {
        setIsdragOver(false);
      }}
      onDrop={handleDrop}
    >
      <h2 className={`text-preset-5`}>Upload Avatar</h2>
      <div
        className={`${style.uploadArea} ${isDragOver ? style.dragOver : ""}`}
      >
        {preview ? (
          <img
            src={preview}
            alt="uploaded image"
            className={style.previewImage}
          />
        ) : (
          uploadButton
        )}
      </div>
      <div className={style.info}>
        <img src={INFO_ICON} alt="info icon" />
        <p className="text-preset-7">
          Upload your photo (JPG or PNG, max size: 500KB).
        </p>
      </div>
    </div>
  );
});
