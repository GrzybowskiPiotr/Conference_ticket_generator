import style from "./UploadImage.module.css";
import UPLOAD_ICON from "/images/icon-upload.svg";
import INFO_ICON from "/images/icon-info.svg";
import { useState } from "react";
import { Button } from "../Button/Button";

export function UploadImage({
  onClick,
  file,
  setFile,
  removeButtonClickHandler,
}) {
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

  const UploadedImageView = (
    <>
      <img
        src={preview}
        alt="uploaded image"
        className={`${style.button} ${style.previewImage} `}
      />
      <div className={style.buttonContainer}>
        <Button
          onClick={(e) => {
            removeButtonClickHandler(e);
            setPreview(null);
          }}
          style={{
            "--height": "22px",
            "--width": "86px",
            fontSize: "12px",
            borderRadius: "4px",
          }}
          typographyPreset={"text-preset-7"}
        >
          Remove image
        </Button>
        <Button
          onClick={onClick}
          style={{
            "--height": "22px",
            "--width": "86px",
            fontSize: "12px",
            borderRadius: "4px",
          }}
          typographyPreset={"text-preset-7"}
        >
          Change image
        </Button>
      </div>
    </>
  );

  if (file) {
    handleFile(file);
  }

  console.log("upload render");

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
        {preview ? UploadedImageView : uploadButton}
      </div>
      <div className={style.info}>
        <img src={INFO_ICON} alt="info icon" />
        <p className="text-preset-7">
          Upload your photo (JPG or PNG, max size: 500KB).
        </p>
      </div>
    </div>
  );
}
