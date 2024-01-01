import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
type UserAvatarProps = {
  src?: string;
};
const UserAvatar = ({ src }: UserAvatarProps) => {
  return (
    <Avatar>
      <AvatarImage src={src} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
