const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    const categories = await db.category.createMany({
      data: [
        {
          name: "Web Development",
        },
        {
          name: "AI",
        },
        {
          name: "Mobile Development",
        },
        {
          name: "Data Science",
        },
        {
          name: "Devops",
        },
      ],
    });

    console.log("SUCCESS");
  } catch (error) {
    console.log("FAILED");
  }
}

main();
