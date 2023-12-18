export type Package = {
  _id: string;
  name: string;
  description: string;
  "dist-tags": {
    latest: string;
  };
};

type SearchPackage = {
  name: string;
  scope: string;
  version: string;
  description: string;
};

type PackageArray = {
  package: SearchPackage;
};

export type NpmSearch = {
  objects: PackageArray[];
  total: number;
  time: string;
};

type Download = {
  downloads: number;
  day: string;
};

export type NpmDownload = {
  start: string;
  end: string;
  package: string;
  downloads: Download[];
};

export type ChartEntry = {
  date: string;
  [key: string]: number | string;
};
