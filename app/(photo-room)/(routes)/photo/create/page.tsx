import React from "react";
import CreateAlbumForm from "./_components/create-album-form";

const Create = () => {
  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="w-full space-y-5 md:w-[400px]">
        <div>
          <h1 className="text-lg font-semibold">Create Photo</h1>
          <p>Show the world about your talent</p>
        </div>

        <div>
          <CreateAlbumForm />
        </div>
      </div>
    </div>
  );
};

export default Create;
