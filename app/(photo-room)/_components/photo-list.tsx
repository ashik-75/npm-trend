import BlurImage from "@/components/blur-image";
import { Photo } from "@prisma/client";
import Link from "next/link";
import React from "react";
type PhotoListProps = {
  photos: Photo[];
};
const PhotoList = ({ photos }: PhotoListProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {photos.map((photo) => (
        <Link key={photo.id} href={`/photos/${photo.id}`}>
          <div className="space-y-2 rounded-lg border p-4  opacity-100 transition hover:opacity-75">
            <BlurImage imageUrl={photo.imageUrl} alt={photo.title} />

            <div>
              <h1 className="font-semibold text-zinc-500">{photo.title}</h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PhotoList;
