"use client";
import { useGetDownloadList } from "@/lib/api";
import { downloadRange } from "@/lib/constant";
import { getPackagesFromParams } from "@/lib/helper";
import { NpmDownload } from "@/lib/types";
import LineChartX from "@/ui/line-chart";
import PackageTag from "@/ui/package-tag";
import SelectYear from "@/ui/select-year";
import React, { useState } from "react";

const Details = ({ params }: { params: { packages: string[] } }) => {
  const packages = params?.packages
    ? getPackagesFromParams(params?.packages)
    : [];
  const [range, setRange] = useState(downloadRange[0]?.value);
  const downloadResponse = useGetDownloadList({ packages, range });
  const isLoading = downloadResponse.some((dt) => dt.isLoading);

  const packageList =
    (downloadResponse
      ?.map((pkg) => pkg.data)
      .filter((pkg) => pkg?.package) as NpmDownload[]) || [];
  // console.log({packageList})
  if (!packages || packages?.length === 0) return null;

  return (
    <div className="relative space-y-5">
      <PackageTag packages={packages} />
      <SelectYear range={range} setRange={setRange} />

      <LineChartX
        npmDownloadList={packageList?.length > 0 ? packageList : []}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Details;
