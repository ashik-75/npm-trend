"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
type BlurImageProps = {
  url: string;
  alt?: string | number;
};
const BlurImage = ({ url, alt }: BlurImageProps) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-3xl">
      <Image
        fill
        src={url}
        alt={`${alt}`}
        onLoadingComplete={() => setLoaded(true)}
        className={clsx("object-cover duration-700 hover:scale-110", {
          "scale-125 blur-xl grayscale": !loaded,
          "scale-100 blur-0 grayscale-0": loaded,
        })}
      />
    </div>
  );
};

export default BlurImage;
