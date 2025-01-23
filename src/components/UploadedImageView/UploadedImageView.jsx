import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Button } from "../Button/Button";
import style from "./UploadedImageView.module.css";
export function UploadedImageView({
  removeButtonClickHandler,
  onClick,
  preview,
}) {
  const width = useWindowWidth();

  return (
    <>
      <img
        src={preview}
        alt="uploaded image"
        className={`${style.button} ${style.previewImage} `}
      />
      <div className={style.buttonContainer}>
        <Button
          onClick={(e) => {
            e.preventDefault();
            removeButtonClickHandler(e);
          }}
          style={{
            "--height": width > 996 ? "32px " : "22px",
            "--width": width > 996 ? "96px" : "86px",
            fontSize: "12px",
            borderRadius: "4px",
          }}
          typographyPreset={"text-preset-7"}
        >
          Remove image
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
          style={{
            "--height": width > 996 ? "32px " : "22px",
            "--width": width > 996 ? "96px" : "86px",
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
}
