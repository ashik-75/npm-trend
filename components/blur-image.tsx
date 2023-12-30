"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

type BlurImageProps = {
  imageUrl: string;
  alt: string;
};

const BlurImage = ({ imageUrl, alt }: BlurImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
      <Image
        src={imageUrl}
        fill
        alt={alt}
        className={clsx(
          "object-cover object-center transition duration-700 ease-in-out",
          {
            "scale-110 blur-2xl grayscale": isLoading,
            "scale-100 blur-0 grayscale-0": !isLoading,
          },
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default BlurImage;
