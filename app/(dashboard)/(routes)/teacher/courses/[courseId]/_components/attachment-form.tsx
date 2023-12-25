"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import {
  Delete,
  Loader,
  Loader2,
  Pencil,
  PlusCircleIcon,
  TrashIcon,
} from "lucide-react";
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
import { Attachment, Course } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import clsx from "clsx";
import { FileUpload } from "@/components/file-uploade";

type TitleFormProps = {
  initialData: Course & {
    attachments: Attachment[];
  };
  courseId: string;
};

const AttachmentForm = ({ initialData, courseId }: TitleFormProps) => {
  const [deletedId, setDeletedId] = useState<string | null>();
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const onSubmit = async (values: { url: string }) => {
    try {
      await axios.post(`/api/courses/${courseId}/attachment`, values);
      toggleEditing();
      router.refresh();
      toast.success("Attachment added");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const onDelete = async (attachmentId: string) => {
    try {
      setDeletedId(attachmentId);
      await axios.delete(`/api/courses/${courseId}/attachment/${attachmentId}`);
      toast.success("Deleted Completed!");
    } catch {
      toast.error("Deleted Error");
    } finally {
      setDeletedId(null);
    }
  };

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="space-y-2 rounded-lg bg-zinc-50 p-4">
      <div className="flex items-center justify-between">
        <p>Attchment</p>
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
              <PlusCircleIcon size={16} />
              <span>Add Attachment</span>
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <div
          className={clsx({
            "italic text-slate-400": !initialData.attachments.length,
          })}
        >
          {initialData?.attachments.length > 0 ? (
            <div>
              {initialData.attachments.map((attachment) => (
                <div className="flex justify-between">
                  <div>{attachment.name}</div>
                  <Button
                    size={"sm"}
                    variant={"ghost"}
                    onClick={() => onDelete(attachment.id)}
                  >
                    {deletedId === attachment.id ? (
                      <Loader className="h-4 w-4 animate-spin" />
                    ) : (
                      <TrashIcon className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            "No Attachment Yet"
          )}
        </div>
      )}

      {isEditing && (
        <div>
          <FileUpload
            endpoint="courseAttachment"
            onChange={(url) => {
              if (url) {
                onSubmit({ url });
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AttachmentForm;
