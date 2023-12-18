import { ChartEntry, NpmDownload } from "@/lib/types";
import { format, subMonths } from "date-fns";

export const formatDataForChart = (list: NpmDownload[]): ChartEntry[] => {
  return list?.reduce((result: ChartEntry[], packageData) => {
    const packageName = packageData?.package as string;
    packageData?.downloads.forEach(({ downloads, day }) => {
      const existingEntry = result.find((entry) => entry.date === day);
      if (existingEntry) {
        existingEntry[packageName] = downloads;
      } else {
        result.push({ date: day, [packageName]: downloads });
      }
    });
    return result;
  }, []);
};

const getUniqueArray = (array: string[]) => {
  const uniqueArray = array.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return uniqueArray;
};

export const getPackagesFromParams = (query: string[]): string[] => {
  // query = ['react-vs-vue'] and some are ['react-vs-@angular','core]
  const joinQuery = query?.join("/"); // output like "react-vs-@angular/core";
  const splitPackages = joinQuery
    ?.split("-vs-")
    .map((pkg) => decodeURIComponent(pkg));
  const sortPackages = getUniqueArray(splitPackages)?.sort();

  return sortPackages; // ['react',"@angular/core"]
};

export const packagesToParams = (packages: string[]) => {
  return getUniqueArray(packages).sort().join("-vs-");
};

export const valueFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString();

export const dateDiff = (month: number) => {
  const today = new Date(); // current date
  const monthAgo = subMonths(today, month);

  const formattedToday = format(today, "yyyy-MM-dd"); // format today's date
  const formattedPastMonth = format(monthAgo, "yyyy-MM-dd");

  return `${formattedPastMonth}:${formattedToday}`;
};

export const formatDate = (date: string) => {
  const currentDate = new Date(date);

  return format(currentDate, "LLL dd");
};
