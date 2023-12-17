"use client";
import { useGetDownloadList } from "@/lib/api";
import { downloadRange } from "@/lib/constant";
import { getUniqueArray } from "@/lib/helper";
import { NpmDownload } from "@/lib/types";
import LineChartX from "@/ui/line-chart";
import SelectYear from "@/ui/select-year";
import React, { useState } from "react";

const Details = ({ params }: { params: { packageName: string } }) => {
  const [range, setRange] = useState(downloadRange[0]?.value);
  const packages = getUniqueArray(params.packageName);
  const downloadResponse = useGetDownloadList({ packages, range });
  const isLoading = downloadResponse.some((dt) => dt.isLoading);

  const packageList =
    (downloadResponse
      ?.map((pkg) => pkg.data)
      .filter((pkg) => pkg?.package) as NpmDownload[]) || [];

  return (
    <div className="relative space-y-5">
      <SelectYear range={range} setRange={setRange} />

      <LineChartX
        npmDownloadList={packageList?.length > 0 ? packageList : []}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Details;
