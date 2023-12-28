import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { Loader } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

type ButtonProps = VariantProps<typeof buttonVariants>;
const SubmitButton = ({
  text,
  isValid,
  isSubmitting,
  ...props
}: {
  text: string;
  isValid: boolean;
  isSubmitting: boolean;
} & ButtonProps) => {
  return (
    <Button
      className="flex gap-x-2"
      disabled={!isValid || isSubmitting}
      {...props}
    >
      <span>{text}</span>
      {isSubmitting && <Loader size={18} className="animate-spin" />}
    </Button>
  );
};

export default SubmitButton;
