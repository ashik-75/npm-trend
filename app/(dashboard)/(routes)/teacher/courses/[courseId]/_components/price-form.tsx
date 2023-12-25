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
import clsx from "clsx";
import { format } from "@/lib/helper";

type PriceFormProps = {
  initialData: Course;
  courseId: string;
};

const schema = z.object({
  price: z.coerce.number().positive(),
});

type SchemaType = z.infer<typeof schema>;

const PriceForm = ({ initialData, courseId }: PriceFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      price: initialData.price || undefined,
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

  return (
    <div className="space-y-2 rounded-lg bg-zinc-50 p-4">
      <div className="flex items-center justify-between">
        <p>Course Price</p>
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
            "italic text-slate-400": !initialData.price,
          })}
        >
          {initialData?.price ? format(initialData.price) : "No price"}
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g 'Provice your course prize'"
                      {...field}
                    />
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

export default PriceForm;
