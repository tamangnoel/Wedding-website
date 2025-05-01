"use client";

// app/event-gallary/page.tsx

// This page currently displays images that were manually added to Firestore.
// TODO: Implement Upload and Take Picture
// -features to upload real images to Firebase Storage once Storage is ready.

import { useEffect, useState } from "react";
import Image from "next/image";
import UploadButton from "@/components/ui/upload-btn";
import TakePictureButton from "@/components/ui/camera-btn";

import { Button } from "@/components/ui/button";

// Import db and storage from your firebase config
import { db, storage } from "@/firebase-config";
import {
  collection,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { query, orderBy } from "firebase/firestore";

export default function EventGalleryPage() {
  const [photos, setPhotos] = useState<{ id: string; url: string }[]>([]);

  useEffect(() => {
    const q = query(collection(db, "photos"), orderBy("createdAt", "desc")); // newest first

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const photoList = snapshot.docs.map((doc) => ({
        id: doc.id,
        url: doc.data().url,
      }));

      setPhotos(photoList);
    });

    return () => unsubscribe();
  }, []);

  const handleUpload = async (file: File) => {
    // upload to Firebase Storage later here
    try {
      const storageRef = ref(storage, `photos/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      console.log("Uploading file:", file.name);
      console.log("Download URL:", downloadURL);

      try {
        await addDoc(collection(db, "photos"), {
          url: downloadURL,
          createdAt: serverTimestamp(),
        });
        console.log("File uploaded and URL saved to Firestore!");
      } catch (firestoreErr: any) {
        console.error(
          "Firestore write failed:",
          firestoreErr.message,
          firestoreErr
        );
      }
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const handleCapture = async (file: File) => {
    // reuse handleUpload later here
    await handleUpload(file);
  };

  return (
    <div className="container flex flex-col items-center">
      {/* Photo Gallery */}
      <section className="mt-12 w-full">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">
          Welcome to Public E & N Gallery
        </h2>

        <p className="font-serif text-center text-xl mb-8">
          A space where cherished memories come to life. Here, you can capture
          special moments, upload your favorite photographs, and revisit them
          anytime. Whether it’s a celebration, a candid shot, or a meaningful
          occasion, this gallery lets you preserve, share, and download your
          memories with ease.
        </p>

        {/* Upload and Camera Buttons */}
        <div className="flex flex-row items-center justify-center gap-4 p-4 mt-10">
          <UploadButton onUpload={handleUpload} />
          <TakePictureButton onCapture={handleCapture} />
        </div>

        {/* Scrollable Photo Gallery */}
        <div className="h-[600px] overflow-y-auto border p-5 rounded-lg p-2 mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo) => (
              <div key={photo.id} className="flex flex-col items-center">
                <a
                  href={photo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square rounded-lg overflow-hidden w-full"
                >
                  <Image
                    src={photo.url}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Uploaded Photo"
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </a>

                {/* Actual Download Button */}
                <a href={photo.url} download className="mt-2">
                  <Button
                    size="sm"
                    variant="default"
                    className="w-16 h-6 text-[12px]"
                  >
                    Download
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-40" />
    </div>
  );
}
