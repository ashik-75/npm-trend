import BlurImage from "@/components/blur-image";
import Link from "next/link";
import React from "react";
import { Photo } from "@prisma/client";

const PhotoList = ({ photos }: { photos: Photo[] | undefined }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {photos?.map((photo) => (
          <Link key={photo.id} href={`/photo/${photo.id}`}>
            <div className="space-y-2 rounded-lg border p-4  opacity-100 transition hover:opacity-75">
              <BlurImage url={photo.imageUrl} alt={photo.title} />

              <div>
                <h1 className="line-clamp-1 font-semibold dark:text-zinc-100">
                  {photo.title}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <br />
    </>
  );
};

export default PhotoList;
