import { db } from "@/lib/db";
import React from "react";
import PhotoList from "../_components/photo-list";

const PhotoRoom = async () => {
  const photos = await db.photo.findMany();

  return (
    <div>
      <PhotoList photos={photos} />
    </div>
  );
};

export default PhotoRoom;
