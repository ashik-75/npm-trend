"use client";

import { downloadRange } from "@/lib/constant";
import { Select, SelectItem } from "@nextui-org/react";

type SelectYearProps = {
  setRange: React.Dispatch<React.SetStateAction<string>>;
  range: string;
};

const SelectYear: React.FC<SelectYearProps> = ({ setRange, range }) => {
  return (
    <Select
      selectedKeys={[range]}
      onChange={(e) => setRange(e.target.value)}
      variant="bordered"
      label="Select Duration"
      className="flex-1 sm:max-w-xs"
    >
      {downloadRange.map((animal) => (
        <SelectItem key={animal.value} value={animal.value}>
          {animal.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectYear;
