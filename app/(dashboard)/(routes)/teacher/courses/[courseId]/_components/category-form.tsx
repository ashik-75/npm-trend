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
  FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Course } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import clsx from "clsx";
import { Combobox } from "@/components/combo-box";

type CategoryFormProps = {
  initialData: Course;
  courseId: string;
  options: { value: string; label: string }[];
};

const schema = z.object({
  categoryId: z.string().min(1, {
    message: "Category not selected",
  }),
});

type SchemaType = z.infer<typeof schema>;

const CategoryForm = ({
  initialData,
  courseId,
  options,
}: CategoryFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      categoryId: initialData.categoryId || "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

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

  const selectedCategory = options.find(
    (option) => option.value === initialData.categoryId,
  );

  return (
    <div className="space-y-2 rounded-lg bg-zinc-50 p-4">
      <div className="flex items-center justify-between">
        <p>Course Tittle</p>
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
      {!isEditing ? (
        <div
          className={clsx({
            "italic text-slate-400": !initialData.categoryId,
          })}
        >
          {selectedCategory?.label || "No Category"}
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Combobox options={options} {...field} />
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

export default CategoryForm;
