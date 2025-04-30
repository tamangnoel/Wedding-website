"use client";

import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function TakePictureButton({
  onCapture,
}: {
  onCapture: (file: File) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && file.size > 0) {
      onCapture(file);
      e.target.value = ""; // Clear the input
    } else {
      console.error("No file captured or file is empty."); // <- Important for mobile edge cases
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center">
      <input
        ref={fileInputRef}
        id="take-picture"
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
        className="hidden"
      />
      <Button variant="default" size="sm" onClick={handleButtonClick}>
        <Camera className="mr-2 h-4 w-4" /> Take Picture
      </Button>
    </div>
  );
}
