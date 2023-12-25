"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Pencil, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Chapter, Course } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import clsx from "clsx";
import { ChaptersList } from "./chapter-list";

type ChapterFormProps = {
  initialData: Course & {
    chapters: Chapter[];
  };
  courseId: string;
};

const schema = z.object({
  title: z.string().min(1),
});

type SchemaType = z.infer<typeof schema>;

const ChapterForm = ({ initialData, courseId }: ChapterFormProps) => {
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const router = useRouter();

  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: SchemaType) => {
    try {
      await axios.post(`/api/courses/${courseId}/chapter`, values);
      toggleEditing();
      router.refresh();
      form.reset({ title: "" });
      toast.success("course updated");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const toggleEditing = () => {
    setIsCreating((prev) => !prev);
  };

  const onEdit = (chapterId: string) => {
    router.push(`/teacher/course/${courseId}/chapter/${chapterId}`);
  };

  const onReorder = async (updateData: { id: string; position: number }[]) => {
    try {
      setIsUpdating(true);

      await axios.put(`/api/courses/${courseId}/chapter/reorder`, {
        list: updateData,
      });
      toast.success("Chapters reordered");
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="space-y-2 rounded-lg bg-zinc-50 p-4">
      <div className="flex items-center justify-between">
        <p>Course Tittle</p>
        <Button
          onClick={toggleEditing}
          variant="ghost"
          className="flex gap-x-2 text-zinc-600"
        >
          {isCreating ? (
            <>
              <span>Cancel</span>
            </>
          ) : (
            <>
              <PlusCircle size={16} className="text-zinc-600" />
              <span className="text-zinc-600">Add Chapter</span>
            </>
          )}
        </Button>
      </div>
      {!isCreating && (
        <div
          className={clsx({
            "italic text-slate-400": !initialData?.chapters?.length,
          })}
        >
          {initialData?.chapters?.length > 0 ? (
            <ChaptersList
              onEdit={onEdit}
              onReorder={onReorder}
              items={initialData?.chapters}
            />
          ) : (
            "No chapter yet"
          )}
        </div>
      )}

      {isCreating && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="e.g 'Course Title'" {...field} />
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

export default ChapterForm;
