import { db } from "@/lib/db";
import React from "react";
import PhotoList from "./_components/photo-list";
import { sleep } from "@/lib/helper";

const PhotoRoom = async () => {
  await sleep(10000);
  const photos = await db.photo.findMany();

  return (
    <div className="p-6">
      <PhotoList photos={photos} />
    </div>
  );
};

export default PhotoRoom;
