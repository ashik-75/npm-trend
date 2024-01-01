import { Code2 } from "lucide-react";
import React from "react";
import CodeForm from "./_components/code-form";

const Code = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-5 p-5 md:p-10">
      <div className="flex gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-purple-800/30 shadow-sm">
          <Code2 className="text-purple-700" size={40} />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold">Code Generation</h1>
          <p className="text-muted-foreground">You can get your chat partner</p>
        </div>
      </div>

      <div>
        <CodeForm />
      </div>
    </div>
  );
};

export default Code;
