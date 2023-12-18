"use client";

import React, { FormEvent, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { Input } from "@nextui-org/react";
import { getPackagesFromParams, packagesToParams } from "@/lib/helper";
import { useParams, useRouter } from "next/navigation";
import { useSearchNpmData } from "@/lib/api";
import Icon from "./icon";
import { log } from "console";

const SearchBar: React.FC = () => {
  const params = useParams();
  const packages = params?.packages
    ? getPackagesFromParams(params?.packages as string[])
    : [];
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const debounceSearchTerm = useDebounce(searchTerm, 500);
  const searchResult = useSearchNpmData(debounceSearchTerm);

  const handleSeach = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setSearchTerm(formData.get("search") as string);
    e.currentTarget.reset();
    e.currentTarget.focus();
  };

  const handleNavigation = (path: string) => {
    if (path) {
      const modifiedPath =
        packages.length > 0 ? packagesToParams([...packages, path]) : path;
      router.push(`/${modifiedPath}`);
      setSearchTerm("");
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <Input
          isClearable
          variant="underlined"
          type="string"
          name="search"
          value={searchTerm}
          placeholder="Search packages ...."
          onChange={handleSeach}
          onClear={() => setSearchTerm("")}
          className=""
          startContent={
            searchResult.isLoading && (
              <Icon name="Loader" className="animate-spin" />
            )
          }
        />
      </form>

      {searchTerm &&
        searchResult.data?.objects &&
        searchResult.data?.objects.length > 0 && (
          <div
            className={
              "absolute left-0 top-[55px] z-50 h-[300px]  w-full shrink-0 divide-y-1 overflow-y-auto border shadow-lg transition-all"
            }
          >
            {searchResult.data?.objects.map((np) => (
              <div
                onClick={() => handleNavigation(np.package.name)}
                key={np.package.name}
                className="cursor-pointer bg-white p-4 hover:bg-slate-50"
              >
                <h1 className="font-bold">{np.package.name}</h1>
                <h1>{np.package.description}</h1>
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default SearchBar;
