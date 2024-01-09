import React from "react";

const Comment = () => {
  return (
    <div className="flex gap-4">
      <img
        className="h-10 w-10 rounded-full object-cover"
        src="https://source.unsplash.com/a-woman-holding-a-bunch-of-green-flowers-PzQ9Y5CIyIY"
        alt={"FF"}
      />

      <div>
        <h1>Malvika X</h1>
        <p>wow amazing man, nice to see you again</p>
      </div>
    </div>
  );
};

export default Comment;
