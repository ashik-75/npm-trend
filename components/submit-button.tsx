import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { Loader } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type ButtonProps = VariantProps<typeof buttonVariants>;
const SubmitButton = ({
  text,
  isValid,
  isSubmitting,
  className,
  ...props
}: {
  text: string;
  isValid: boolean;
  isSubmitting: boolean;
  className?:string,
} & ButtonProps) => {
  return (
    <Button
      className={cn("flex gap-x-2",className)}
      disabled={!isValid || isSubmitting}
      {...props}
    >
      <span>{text}</span>
      {isSubmitting && <Loader size={18} className="animate-spin" />}
    </Button>
  );
};

export default SubmitButton;
