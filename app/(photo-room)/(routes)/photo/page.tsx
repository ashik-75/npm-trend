import React from "react";
import PhotoList from "./_components/photo-list";
import { getPhotos } from "../../server/action";
import PhotoPagination from "./_components/photo-pagination";
import PhotoSearch from "./_components/photo-search";

const PhotoRoom = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const page = searchParams["page"] ? Number(searchParams["page"]) : 1;
  const per_page = searchParams["per_page"]
    ? Number(searchParams["per_page"])
    : 5;
  const search = searchParams["search"];

  const photos = await getPhotos(page, per_page, search);

  return (
    <div className="space-y-5 p-5">
      <PhotoSearch />
      <PhotoList photos={photos?.data} />
      <PhotoPagination total_page={photos?.total_page} />
    </div>
  );
};

export default PhotoRoom;
