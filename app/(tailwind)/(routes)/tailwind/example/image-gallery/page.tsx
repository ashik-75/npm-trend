import React from "react";
import { images } from "./constant";
import BlurImage from "@/components/blur-image";

const ImageGallery = () => {
  return (
    <div className="container mx-auto w-full p-2 md:p-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 ">
        {images.map((image) => (
          <div key={image.id}>
            <BlurImage url={image.url} alt={image.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
