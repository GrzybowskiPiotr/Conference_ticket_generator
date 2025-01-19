import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { formContext } from "../../contexts/formContext";
import { Button } from "../Button/Button";
import { UploadImage } from "../UploadImage/UploadImage";
import style from "./Form.module.css";

export function Form() {
  const [file, setFile] = useState(null);
  const inputUploadFileRef = useRef(null);
  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm();
  const { ref, onChange, ...rest } = register("avatar", {
    required: "Pleas upload avatar image",
  });
  const [_, setFormData] = useContext(formContext);

  function submitHandler(data) {
    const formData = new FormData();
    formData.append("avatar", data.avatar[0]);
    formData.append("FullName", data.FullName);
    formData.append("email", data.email);
    formData.append("GitHubUserName", data.GitHubUserName);
    setFormData(formData);
  }

  function handleUploadInputClick() {
    inputUploadFileRef.current.click();
  }

  function handleInputChange(e) {
    console.log("input Change");
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setValue("avatar", e.target.files);
    }
  }

  function removeButtonClickHandler() {
    setFile(null);
    inputUploadFileRef.current.value = "";
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      autoComplete="off"
      id="form"
      className={style.form}
    >
      <UploadImage
        onClick={handleUploadInputClick}
        file={file}
        setFile={setFile}
        removeButtonClickHandler={removeButtonClickHandler}
      />
      <input
        type="file"
        ref={inputUploadFileRef}
        accept="image/jpeg, image/png"
        onChange={(e) => {
          handleInputChange(e);
        }}
        {...rest}
      />

      <label htmlFor="FullName">
        Full Name
        <input
          className="text-preset-5"
          type="text"
          id="FullName"
          {...register("FullName", {
            required: "Full Name is required",
          })}
        />
      </label>
      <label htmlFor="email">
        Email Adress
        <input
          className="text-preset-5"
          autoComplete="off"
          type="email"
          placeholder="example@email.com"
          id="email"
          {...register("email", { required: "Email field is requierd!" })}
        />
      </label>
      <label htmlFor="GitHubUserName">
        GitHubUserName
        <input
          className="text-preset-5"
          type="text"
          placeholder="@yourusername"
          id="GitHubUserName"
          {...register("GitHubUserName", {
            required: "GitHub user name is required!",
          })}
        />
      </label>
      <Button
        typographyPreset={"text-preset-5extrabold"}
        style={{
          "--width": "100%",
          "--height": "54px",
          backgroundColor: "var(--colors-orange-500)",
          "--color": "var(--colors-neutral-900)",
        }}
      >
        Generate My Ticket
      </Button>
    </form>
  );
}
