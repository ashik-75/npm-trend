"use client";
import * as z from "zod";
import React, { useState } from "react";
import { ImageIcon, Pencil, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Course } from "@prisma/client";
import { FileUpload } from "@/components/file-uploade";
import Image from "next/image";

type ImageUploadProps = {
  initialData: Course;
  courseId: string;
};

const schema = z.object({
  imageUrl: z.string().min(1, {
    message: "Title is required",
  }),
});

type SchemaType = z.infer<typeof schema>;

const ImageUploadForm = ({ initialData, courseId }: ImageUploadProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const onSubmit = async (values: SchemaType) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toggleEditing();
      router.refresh();
      toast.success("course updated");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="space-y-2 rounded-lg bg-zinc-50 p-4">
      <div className="flex items-center justify-between">
        <p>Course Image</p>
        <Button
          onClick={toggleEditing}
          variant="ghost"
          size={"sm"}
          className="flex gap-x-2 text-zinc-600"
        >
          {isEditing && <span>Cancel</span>}

          {!isEditing && (
            <>
              {initialData.imageUrl ? (
                <>
                  <Pencil size={16} />
                  <span>Edit Image</span>
                </>
              ) : (
                <>
                  <Plus size={16} />
                  <span>Add Image</span>
                </>
              )}
            </>
          )}
        </Button>
      </div>

      {!isEditing ? (
        <div>
          {initialData.imageUrl ? (
            <div className="relative aspect-video">
              <Image
                src={initialData.imageUrl}
                className="h-full w-full object-contain"
                alt="Image"
                fill
              />
            </div>
          ) : (
            <div className="flex h-40 items-center justify-center rounded-lg bg-sky-50">
              <ImageIcon size={30} />
            </div>
          )}
        </div>
      ) : (
        <div>
          <FileUpload
            endpoint="courseImage"
            onChange={(url) => {
              if (url) {
                console.log("FINAL_URL", url);
                onSubmit({ imageUrl: url });
              }

              toast.error("Uploading error");
            }}
          />
          <div>16:9</div>
        </div>
      )}
    </div>
  );
};

export default ImageUploadForm;
