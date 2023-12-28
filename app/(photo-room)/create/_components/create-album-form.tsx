"use client";

import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FileUpload } from "@/components/file-uploade";
import Image from "next/image";
import SubmitButton from "@/components/submit-button";

const schema = z.object({
  title: z.string().min(1),
  imageUrl: z.string().min(1),
  description: z.string(),
});

type AlbumFormType = z.infer<typeof schema>;

const CreateAlbumForm = () => {
  const router = useRouter();
  const form = useForm<AlbumFormType>({
    resolver: zodResolver(schema),
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: AlbumFormType) => {
    try {
      await axios.post(`/api/photo`, values);
      toast.success("photo created");
      router.refresh();
      router.push("/");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Form {...form}>
      <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <Input placeholder="e.g 'Sunset on the moon rise'" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        {form.getValues("imageUrl") ? (
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-sm">
            <Image
              src={form.getValues("imageUrl")}
              alt={form.getValues("imageUrl")}
              fill
            />
          </div>
        ) : (
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FileUpload
                  endpoint="courseImage"
                  onChange={(url) => {
                    if (url) {
                      field.onChange(url);
                    }
                  }}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <Textarea
                placeholder="e.g 'Express about your thought'"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <SubmitButton
          text="Create"
          isSubmitting={isSubmitting}
          isValid={isValid}
          variant={"default"}
        />
      </form>
    </Form>
  );
};

export default CreateAlbumForm;
