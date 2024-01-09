// "use client";
"use server";

import { db } from "@/lib/db";
import { Photo } from "@prisma/client";
type getPropsType = {
  page: number;
  totalPage: number;
  data: Photo[];
};
export async function getPhotos(page: number, per_page: number) {
  try {
    // mocked, skipped and limited in the real app
    const start = (page - 1) * per_page;

    const total_document = await db.photo.count();
    const total_page = Math.ceil(total_document / per_page);
    const response = await db.photo.findMany({
      take: per_page,
      skip: start,
    });

    const payload = {
      page,
      total_page,
      data: response,
    };

    return payload;
  } catch (error) {}
}
