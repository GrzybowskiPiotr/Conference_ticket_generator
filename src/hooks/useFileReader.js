import { useEffect, useState } from "react";

export function useFileReader(file) {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      setError(null);
      return;
    }

    if (
      file.size > 500 * 1024 ||
      !["image/jpeg", "image/png"].includes(file.type)
    ) {
      setError("file must be in .jpeg or .png and be max 500Kb");
      setPreview(null);
      return;
    }

    setError(null);
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);

    return () => {
      setPreview(null);
    };
  }, [file]);

  return { preview, error };
}
