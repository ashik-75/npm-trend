import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Image from "next/image";
import React, { Suspense } from "react";
import FeedbackForm from "./_components/feedback-form";
import FeedbackList from "./_components/feedback-list";
import FeedbackLoader from "./_components/feedback-loader";
import BlurImage from "@/components/blur-image";

const PhotoDetails = async ({ params }: { params: { photoId: string } }) => {
  const photo = await db.photo.findUnique({
    where: {
      id: params.photoId,
    },
  });

  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <div className="space-y-5 p-6">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <BlurImage alt={photo.title} imageUrl={photo.imageUrl} />

        <div className="space-y-1">
          <h1 className="text-xl font-bold text-zinc-600">{photo.title}</h1>
          <p className="text-sm text-zinc-500">{photo.description}</p>

          <div className="space-x-2">
            <Button variant={"outline"}>Add to Favourite</Button>
            <Button variant={"outline"}>Download</Button>
          </div>
        </div>
      </div>

      <div className="max-w-xl space-y-5">
        <FeedbackForm photoId={params.photoId} />
        <Suspense fallback={<FeedbackLoader />}>
          <FeedbackList photoId={params.photoId} />
        </Suspense>
      </div>
    </div>
  );
};

export default PhotoDetails;
