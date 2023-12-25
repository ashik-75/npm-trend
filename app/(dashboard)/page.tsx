import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { RocketIcon } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className=" h-full p-6">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        vel.
      </p>

      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default Page;
