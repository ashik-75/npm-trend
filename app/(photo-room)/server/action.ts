"use server";

import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

export async function getPhotos(
  page: number,
  per_page: number,
  search?: string,
) {
  try {
    const start = (page - 1) * per_page;

    const whereCondition: Prisma.PhotoWhereInput = search
      ? {
          OR: [
            {
              title: {
                contains: search,
                mode: "insensitive",
              },
            },
          ],
        }
      : {};

    const [total_document, response] = await Promise.all([
      db.photo.count({ where: whereCondition }),
      db.photo.findMany({
        where: whereCondition,
        take: per_page,
        skip: start,
      }),
    ]);

    const total_page = Math.ceil(total_document / per_page);

    return {
      page,
      total_page,
      data: response,
    };
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
    throw new Error("Something went wrong while fetching photos.");
  }
}
