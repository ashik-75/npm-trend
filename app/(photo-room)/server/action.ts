// "use client";
"use server";

import { db } from "@/lib/db";

export async function getPhotos(
  page: number,
  per_page: number,
  search?: string,
) {
  try {
    // mocked, skipped and limited in the real app
    const start = (page - 1) * per_page;

    const total_document = await db.photo.count();
    const total_page = Math.ceil(total_document / per_page);
    const response = search
      ? await db.photo.findMany({
          where: {
            OR: [
              {
                title: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            ],
          },
          take: per_page,
          skip: start,
        })
      : await db.photo.findMany({
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
