import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { formContext } from "../../contexts/formContext";
import { InputWithLabel } from "../InputWithLabel/InputWithLabel";
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
    formState: { errors },
  } = useForm();
  const { ref, onChange, ...rest } = register("avatar", {
    required: "Pleas upload avatar image.",
  });
  const fullNameRegister = {
    ...register("FullName", {
      required: "Full Name is required",
      pattern: {
        value: /^[A-Za-z]+\s[A-Za-z]+$/gm,
        message:
          "Full Name must include first and last name separated by a space.",
      },
    }),
  };
  const emailRegister = {
    ...register("email", {
      required: "Email field is requierd!",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please provide valid email address.",
      },
    }),
  };
  const gitUserNameRegister = {
    ...register("GitHubUserName", {
      required: "GitHub Username is required!",
      pattern: {
        value: /^[@].+$/gm,
        message: "Please provide a Git username that starts with '@'.",
      },
    }),
  };
  const [_, setFormData] = useContext(formContext);

  function submitHandler(data) {
    setFormData(data);
  }

  function handleUploadInputClick() {
    inputUploadFileRef.current.click();
  }

  function handleInputChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setValue("avatar", selectedFile);
    }
  }

  function removeButtonClickHandler() {
    setFile(null);
    inputUploadFileRef.current.value = "";
  }

  function setfileFromDrop(file) {
    setFile(file);
    setValue("avatar", file);
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
        setFile={setfileFromDrop}
        removeButtonClickHandler={removeButtonClickHandler}
        error={errors.avatar}
      />
      <input
        type="file"
        ref={inputUploadFileRef}
        accept="image/jpeg, image/png"
        onChange={(e) => handleInputChange(e)}
        {...rest}
        aria-invalid={errors.avatar ? true : false}
        aria-describedby="avatar-hint"
      />
      <InputWithLabel
        label={"Full Name"}
        id={"FullName"}
        formRegister={fullNameRegister}
        error={errors.FullName}
      />

      <InputWithLabel
        label={"Email"}
        placeholder={"example@email.com"}
        id={"email"}
        formRegister={emailRegister}
        type="email"
        error={errors.email}
      />

      <InputWithLabel
        label={"GitHub Username"}
        id={"GitHubUserName"}
        placeholder="@yourusername"
        formRegister={gitUserNameRegister}
        error={errors.GitHubUserName}
      />
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
