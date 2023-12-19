import React from "react";

const Page = () => {
  return (
    <div>
      <ul>
        {Array.from({ length: 300 }).map((_, ind) => (
          <li key={ind}>{ind}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
