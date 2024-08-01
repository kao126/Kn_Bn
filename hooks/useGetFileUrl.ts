import { useEffect, useState } from 'react';

export function useGetFileUrl({ file }: { file: File | null }) {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      return;
    }

    const reader: FileReader | null = new FileReader();
    reader.onloadend = () => {
      // base64のimageUrlを生成する。
      const base64 = reader && reader.result;
      if (base64 && typeof base64 === 'string') {
        setFileUrl(base64);
      }
    };
    reader.readAsDataURL(file);
  }, [file]);

  return {
    fileUrl,
    setFileUrl,
  };
}
