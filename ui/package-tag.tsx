"use client";

import { packagesToParams } from "@/lib/helper";
import { useRouter } from "next/navigation";
import React from "react";
import Icon from "./icon";
import PackageDetails from "./hover-card";

type PackageTagProps = {
  packages: string[];
};

const PackageTag: React.FC<PackageTagProps> = ({ packages }) => {
  const router = useRouter();
  if (!packages || packages?.length === 0) return null;

  const removePackage = (pkg: string) => {
    const newPackages = packages.filter((pk) => pk !== pkg);
    const pkgString = packagesToParams(newPackages);
    router.push(`/${pkgString}`);
  };

  return (
    <div className="flex flex-wrap gap-5">
      {packages.map((pkg) => (
        <div
          color="primary"
          className="flex cursor-pointer items-center gap-3 rounded-full border border-zinc-200 px-2 py-1 text-zinc-500"
          key={pkg}
        >
          <PackageDetails name={pkg} />

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
