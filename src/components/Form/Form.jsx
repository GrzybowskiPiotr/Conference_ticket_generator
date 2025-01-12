import { UploadImage } from "../UploadImage/UploadImage";
import { useRef, useState } from "react";
import style from "./Form.module.css";

export function Form() {
  const [file, setFile] = useState(null);
  const inputUploadFileRef = useRef(null);

  function submitHandler(e) {
    e.preventDefault();
    console.log("submit");
    if (file) {
      console.log(`loaded file : ${file.name}`);
    } else {
      console.log("no file loaded");
    }
  }

  function handleUploadInputClick(e) {
    e.preventDefault();
    inputUploadFileRef.current.click();
  }

  function handleInputChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  }

  return (
    <form onSubmit={submitHandler} autoComplete="off">
      <label htmlFor="UploadImage">
        <UploadImage
          onClick={handleUploadInputClick}
          ref={inputUploadFileRef}
          file={file}
          setFile={setFile}
        />
        <input
          type="file"
          id="UploadImage"
          ref={inputUploadFileRef}
          accept="image/jpeg, image/png"
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="FullName">
        Full Name
        <input type="text" name="FullName" id="FullName" />
      </label>
      <label htmlFor="email">
        Email Adress
        <input
          autoComplete="off"
          type="email"
          name="email"
          placeholder="example@email.com"
          id="email"
        />
      </label>
      <label htmlFor="GitHubUserName">
        GitHubUserName
        <input type="text" placeholder="@yourusername" id="GitHubUserName" />
      </label>
      <button className={style.submitBtn}>
        <span className="text-preset-5extrabold ">Generate My Ticket</span>
      </button>
    </form>
  );
}
