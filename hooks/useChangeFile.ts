import { useRef, useState } from 'react';
import { useGetFileUrl } from './useGetFileUrl';

export function useChangeFile() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const { fileUrl } = useGetFileUrl({ file: file });

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  return {
    fileInputRef,
    file,
    fileUrl,
    handleChangeFile,
  };
}
