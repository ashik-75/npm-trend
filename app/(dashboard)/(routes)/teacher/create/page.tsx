"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(5, {
    message: "title must be at least 5 character",
  }),
});
type FormSchemaType = z.infer<typeof formSchema>;
const Create = () => {
  const router = useRouter();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: FormSchemaType) => {
    try {
      const response = await axios.post("/api/courses", {
        title: values.title,
      });
      toast.success("Course created");
      router.refresh();
      router.push(`/teacher/courses/${response.data.id}`);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
  return (
    <div className="flex h-full justify-center p-6 md:items-center">
      <div className="max-w-2xl space-y-5">
        <>
          <h1 className="text-2xl">Name your course</h1>
          <p className="text-sm text-slate-600">
            What would you like to name your course? Don&apos;t worry, you can
            change this later.
          </p>
        </>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Courese Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="enter title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={!isValid || isSubmitting}
              type="submit"
              className="flex gap-2"
            >
              {isSubmitting && <Loader2 className="animate-spin" size={22} />}
              Create
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Create;
