import React from "react";
import { links } from "../constant";
import Card from "./card";
import { sleep } from "@/lib/utils";

const CardList = async () => {
  await sleep();
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {links.map((link) => (
        <div key={link.id}>
          <Card key={link.id} href={link.href} title={link.label} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
