"use client";

import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuth, useUser } from "@clerk/nextjs";
import Link from "next/link";
import SubmitButton from "@/components/submit-button";

const schema = z.object({
  description: z.string(),
});

type FeedbackFormType = z.infer<typeof schema>;

const FeedbackForm = ({ photoId }: { photoId: string }) => {
  const auth = useAuth();

  const user = useUser();

  const router = useRouter();
  const form = useForm<FeedbackFormType>({
    resolver: zodResolver(schema),
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: FeedbackFormType) => {
    try {
      await axios.post(`/api/photo/${photoId}/feedback`, values);
      toast.success("Thanks for your feedback");
      form.reset({
        description: "",
      });
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  if (auth.isLoaded && !auth.isSignedIn) {
    return (
      <div>
        <p className="text-sm text-muted-foreground">
          if you want to give feedback then{" "}
        </p>
        <Link
          href={`/sign-in?redirect_url=/photos/${photoId}`}
          className="text-teal-600 underline"
        >
          Sign in
        </Link>
      </div>
    );
  }
  return (
    <Form {...form}>
      <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
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
          text="Submit"
          isSubmitting={isSubmitting}
          isValid={isValid}
          variant={"outline"}
        />
      </form>
    </Form>
  );
};

export default FeedbackForm;
