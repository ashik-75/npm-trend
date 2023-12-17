"use client";

import { getUniqueArray } from "@/lib/helper";
import { useRouter } from "next/navigation";
import React from "react";
import Icon from "./icon";

type PackageTagProps = {
  packageString?: string;
};

const PackageTag: React.FC<PackageTagProps> = ({ packageString }) => {
  const router = useRouter();
  if (!packageString) return null;

  const packages = getUniqueArray(packageString);

  const removePackage = (pkg: string) => {
    const newPackages = packages.filter((pk) => pk !== pkg);
    const pkgString = newPackages.join("-vs-");
    router.push(`/${pkgString}`);
  };
  return (
    <div className="flex gap-5">
      {packages.map((pkg) => (
        <div
          color="primary"
          className="flex cursor-pointer items-center gap-3 rounded-full border border-zinc-200 px-2 py-1 text-zinc-500"
        >
          <span>{pkg}</span>

          <Icon
            onClick={() => removePackage(pkg)}
            className="cursor-pointer"
            name="XCircle"
          />
        </div>
      ))}
    </div>
  );
};

export default PackageTag;
