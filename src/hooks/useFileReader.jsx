import { useEffect, useState } from "react";

export function useFileReader(file) {
  const [preview, setPreview] = useState(null);
  const [errorFileType, setErrorFileType] = useState(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      setErrorFileType(null);
      return;
    }

    if (
      file.size > 500 * 1024 ||
      !["image/jpeg", "image/png"].includes(file.type)
    ) {
      setErrorFileType("file must be in .jpeg or .png and be max 500Kb");
      setPreview(null);
      return;
    }

    setErrorFileType(null);
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);

    return () => {
      setPreview(null);
    };
  }, [file]);

  return { preview, errorFileType };
}
