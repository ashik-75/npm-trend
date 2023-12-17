import { colors } from "@/lib/constant";
import { formatDataForChart, formatDate, valueFormatter } from "@/lib/helper";
import { NpmDownload } from "@/lib/types";
import { Card, LineChart, Title } from "@tremor/react";
import React from "react";
import Icon from "./icon";

type LineChartXProps = {
  npmDownloadList: NpmDownload[];
  isLoading: boolean;
};

const LineChartX: React.FC<LineChartXProps> = ({
  npmDownloadList,
  isLoading,
}) => {
  const packageDownloadList = formatDataForChart(npmDownloadList)?.map(
    (value) => ({ ...value, date: formatDate(value.date) }),
  );
  const keys =
    packageDownloadList.length > 0
      ? Object.keys(packageDownloadList?.[0])?.slice(1)
      : [];
  const lineColors = colors.slice(0, keys.length);

  return (
    <Card>
      <div className="flex justify-between">
        <Title className="text-zinc-500">NPM Trends</Title>

        {isLoading && (
          <div className="flex flex-col items-start sm:items-end">
            <Icon
              size={25}
              name="Loader"
              className="animate-spin text-pink-500"
            />
            <span className="hidden ">Processing ...</span>
          </div>
        )}
      </div>
      <LineChart
        className="mt-4 h-72"
        data={packageDownloadList}
        index="date"
        categories={keys}
        colors={lineColors}
        yAxisWidth={30}
        valueFormatter={valueFormatter}
        showAnimation={true}
        curveType="natural"
      />
    </Card>
  );
};

export default LineChartX;
