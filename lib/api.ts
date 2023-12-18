import { useQueries, useQuery } from "@tanstack/react-query";
import { NpmDownload, NpmSearch, Package } from "@/lib/types";
import { client } from "./client";

const fetchPackages = (endpoint: string | undefined): Promise<NpmSearch> => {
  return endpoint === undefined
    ? Promise.reject(new Error("Nothing found to search"))
    : client(endpoint);
};

export const useSearchNpmData = (searchTerm: string | undefined) => {
  return useQuery({
    queryKey: ["search", { searchTerm }],
    queryFn: () => fetchPackages(`-/v1/search?text=${searchTerm}`),
    enabled: Boolean(searchTerm),
  });
};

export const fetchPackageDownloadStat = ({
  range,
  packageName,
}: {
  range?: string;
  packageName?: string;
}): Promise<NpmDownload> => {
  return range === undefined || packageName === undefined
    ? Promise.reject(new Error("Nothing found to search"))
    : client(`downloads/range/${range}/${packageName}`, {
        root: "https://api.npmjs.org",
      });
};

export const useGetDownloadList = ({
  packages,
  range,
}: {
  packages: string[];
  range: string;
}) => {
  return useQueries({
    queries: packages.map((pkg) => {
      return {
        queryKey: ["package", pkg, range],
        queryFn: () => fetchPackageDownloadStat({ range, packageName: pkg }),
      };
    }),
  });
};

const fetchPackage = (endpoint: string | undefined): Promise<Package> => {
  return endpoint === undefined
    ? Promise.reject("Package name undefined")
    : client(endpoint);
};

export const useGetPackageDetails = (packageName: string | undefined) => {
  return useQuery({
    queryKey: ["package", [packageName]],
    queryFn: () => fetchPackage(packageName),
    enabled: Boolean(packageName),
  });
};
