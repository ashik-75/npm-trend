"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactPlayer from "react-player";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Chapter, MuxData } from "@prisma/client";
import clsx from "clsx";
import { FileUpload } from "@/components/file-uploade";

type ChapterVideoFormProps = {
  initialData: Chapter & { muxData?: MuxData | null };
  courseId: string;
  chapterId: string;
};

const schema = z.object({
  videoUrl: z.string().min(1),
});

type SchemaType = z.infer<typeof schema>;

const ChapterVideoForm = ({
  initialData,
  courseId,
  chapterId,
}: ChapterVideoFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      videoUrl: initialData.videoUrl || "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: SchemaType) => {
    try {
      await axios.patch(
        `/api/courses/${courseId}/chapter/${chapterId}`,
        values,
      );
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
        <p>Chapter Video</p>
        <Button
          onClick={toggleEditing}
          variant="ghost"
          className="flex gap-x-2 text-zinc-600"
        >
          {isEditing ? (
            <>
              <span>Cancel</span>
            </>
          ) : (
            <>
              <Pencil size={16} className="text-zinc-600" />
              <span className="text-zinc-600">Edit</span>
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <div
          className={clsx({
            "text-sm italic text-zinc-400": !initialData.description,
          })}
        >
          {initialData.videoUrl ? (
            <div className="relative mt-2 aspect-video">
              <ReactPlayer
                url={initialData?.videoUrl}
                playbackId={initialData?.videoUrl || ""}
                controls
              />
            </div>
          ) : (
            <div>No video here</div>
          )}
        </div>
      )}

      {isEditing && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="videoUrl"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                  <FormControl>
                    <FileUpload endpoint="chapterVideo" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={isSubmitting || !isValid}>Save</Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ChapterVideoForm;
