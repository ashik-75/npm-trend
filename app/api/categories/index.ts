import { notFound } from "next/navigation";
import { Category } from "./category";

export const getCategories = async ({
  parent,
  cache,
}: { parent?: string; cache?: "no-store" } = {}) => {
  const res = await fetch(
    `https://app-router-api.vercel.app/api/categories${
      parent ? `?parent=${parent}` : ""
    }`,
    {
      cache: cache ?? "default",
    },
  );

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  const categories = (await res.json()) as Category[];

  if (categories.length === 0) {
    notFound();
  }

  return categories;
};

export const getCategory = async ({
  slug,
  cache,
}: {
  slug: string;
  cache?: "no-store";
}) => {
  const res = await fetch(
    `https://app-router-api.vercel.app/api/categories${
      slug ? `?slug=${slug}` : ""
    }`,
    {
      cache: cache ?? "default",
    },
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const category = (await res.json()) as Category;

  if (!category) {
    notFound();
  }

  return category;
};
