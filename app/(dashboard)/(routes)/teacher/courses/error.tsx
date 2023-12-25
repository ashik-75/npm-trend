"use client";
import React from "react";

const Error = ({ error }: { error: Error }) => {
  return <div>Something went wrong - {error.message}</div>;
};

export default Error;
