"use client";

import * as z from "zod";
import SyntaxHighlighter from "react-syntax-highlighter";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader, SendHorizonal } from "lucide-react";
import UserAvatar from "@/components/user-avatar";
import { useUser } from "@clerk/nextjs";

const convsersationSchema = z.object({
  prompt: z.string().min(1),
});

type ConvsersationSchemaType = z.infer<typeof convsersationSchema>;

const ConversationForm = () => {
  const user = useUser();
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );
  const form = useForm<ConvsersationSchemaType>({
    resolver: zodResolver(convsersationSchema),
    defaultValues: {
      prompt: "",
    },
  });
  const { isValid, isSubmitting } = form.formState;

  const onSubmit = async (values: ConvsersationSchemaType) => {
    try {
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];
      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });

      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error) {
      toast.error("something went wrong!");
    }
  };

  return (
    <div className="space-y-5">
      <Card className="border-neutral-800 bg-neutral-800 p-5">
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem className="md:col-span-8">
                  <FormControl>
                    <Textarea
                      className="border-neutral-900 text-neutral-300 focus-visible:ring-0"
                      placeholder="e.g: 'Write your message'"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button>
              {isSubmitting ? (
                <Loader className="animate-spin" />
              ) : (
                <SendHorizonal className="text-neutral-400" />
              )}
            </Button>
          </form>
        </Form>
      </Card>

      <div className="flex flex-col-reverse gap-y-4 ">
        {messages?.map((message, index) => (
          <div
            key={message.content}
            className={cn(
              "flex w-full items-start gap-x-8 rounded-lg bg-neutral-800 p-8",
              message.role === "user" ? "text-neutral-50" : "text-neutral-50",
            )}
          >
            {message.role === "user" ? (
              <UserAvatar src={user?.user?.imageUrl} />
            ) : (
              <UserAvatar />
            )}
            <Markdown
              components={{
                code(props) {
                  const { children, className, node, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || "");

                  return match ? (
                    <SyntaxHighlighter
                      // {...rest}
                      PreTag="div"
                      language={match[1]}
                      style={dracula}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  );
                },
              }}
              className={"overflow-hidden text-sm leading-7"}
            >
              {message?.content}
            </Markdown>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationForm;
