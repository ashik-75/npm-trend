"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader, SendHorizonal } from "lucide-react";
import UserAvatar from "@/components/user-avatar";
import { useUser } from "@clerk/nextjs";
import { useChat } from "ai/react";

const CodeForm = () => {
  const user = useUser();

  const {
    messages,
    input,
    handleInputChange,
    setInput,
    handleSubmit,
    isLoading,
    error,
  } = useChat({
    api: "/api/code",
  });

  const [value, setValue] = useState("");

  const handleApi = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput(value);
    handleSubmit(e);
    setValue("");
  };

  return (
    <div className="space-y-5">
      <Card className="border-neutral-800 bg-neutral-800 p-5">
        <form className="space-y-4" onSubmit={handleApi}>
          <Textarea
            placeholder="e.g: 'write what you want'"
            className="border-neutral-600 text-neutral-100 focus-visible:ring-0"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button>
            {isLoading ? (
              <Loader className="animate-spin" />
            ) : (
              <SendHorizonal className="text-neutral-400" />
            )}
          </Button>
        </form>
      </Card>

      <div className="flex flex-col-reverse gap-y-4 ">
        {messages?.map((message, index) => (
          <div
            key={typeof message.content === "string" ? message.content : index}
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

export default CodeForm;
