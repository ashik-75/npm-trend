import React from "react";
import PhotoList from "./_components/photo-list";
import { getPhotos } from "../../server/action";
import PhotoPagination from "./_components/photo-pagination";

const PhotoRoom = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "5";

  const photos = await getPhotos(Number(page), Number(per_page));

  return (
    <div className="p-5">
      <PhotoList photos={photos?.data} />
      <PhotoPagination page={photos?.page} total_page={photos?.total_page} />
    </div>
  );
};

export default PhotoRoom;
