import { Photo } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type PhotoListProps = {
  photos: Photo[];
};
const PhotoList = ({ photos }: PhotoListProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {photos.slice(0, 1).map((photo) => (
        <Link key={photo.id} href={`/photos/${photo.id}`}>
          <div className="space-y-2 rounded-lg border p-4  opacity-100 transition hover:opacity-75">
            <div className="relative aspect-video">
              <Image
                src={photo.imageUrl}
                fill
                alt={photo.title}
                className="rounded-lg"
              />
            </div>
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
