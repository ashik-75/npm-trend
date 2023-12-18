"use client";

import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { useGetPackageDetails } from "@/lib/api";

type PackageDetailsProps = {
  name: string;
};

const PackageDetails: React.FC<PackageDetailsProps> = ({ name }) => {
  const packageDetails = useGetPackageDetails(name);
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <span className="inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none hover:underline focus:shadow-[0_0_0_2px_white]">
          {name}
        </span>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade z-10 w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
          sideOffset={5}
        >
          {packageDetails.isLoading ? (
            <div>Loading</div>
          ) : (
            <div className="flex flex-col gap-[7px]">
              <div className="flex flex-col gap-[15px]">
                <div>
                  <div className="text-mauve12 m-0 text-[20px] font-bold leading-[1.5]">
                    {packageDetails.data?.name}
                  </div>
                  <div className="text-mauve10 m-0 text-[15px] font-medium leading-[1.5]">
                    @{packageDetails.data?.["dist-tags"]?.latest}
                  </div>
                </div>
                <div className="text-mauve12 m-0 text-[15px] leading-[1.5]">
                  {packageDetails.data?.description}
                </div>
              </div>
            </div>
          )}

          <HoverCard.Arrow className="fill-white" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default PackageDetails;
