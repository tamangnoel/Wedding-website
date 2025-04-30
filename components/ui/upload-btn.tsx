"use client";

import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function UploadButton({
  onUpload,
}: {
  onUpload: (file: File) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file);
      e.target.value = ""; // Clear the input
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click(); // trigger the input manually
  };

  return (
    <div className="flex flex-col items-center">
      <input
        ref={fileInputRef}
        id="upload-photo"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <Button variant="default" size="sm" onClick={handleButtonClick}>
        <Upload className="mr-2 h-4 w-4" /> Upload Photo
      </Button>
    </div>
  );
}
