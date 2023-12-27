"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Chapter } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import clsx from "clsx";
import { Editor } from "@/components/editor";
import { EditorPreview } from "@/components/editor-preview";
import { Checkbox } from "@/components/ui/checkbox";

type ChapterAccessFormProps = {
  initialData: Chapter;
  courseId: string;
  chapterId: string;
};

const schema = z.object({
  isFree: z.boolean().default(false),
});

type SchemaType = z.infer<typeof schema>;

const ChapterAccessForm = ({
  initialData,
  courseId,
  chapterId,
}: ChapterAccessFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      isFree: initialData.isFree,
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
        <p>Chapter Access</p>
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
          {initialData.isFree ? (
            <div>This Chapter is free for all</div>
          ) : (
            <div>this chapter is paid</div>
          )}
        </div>
      )}

      {isEditing && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="isFree"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="leading-none">
                    <FormLabel>
                      Use different settings for my mobile devices
                    </FormLabel>
                  </div>
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

export default ChapterAccessForm;
