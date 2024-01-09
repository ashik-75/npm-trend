import { faker } from "@faker-js/faker";
const links = [
  {
    id: 1,
    href: "/tailwind/example/table",
    label: "Table",
  },
  {
    id: 2,
    href: "/tailwind/example/testimonial-carousel",
    label: "Testimonial Carousel",
  },
  {
    id: 3,
    href: "/tailwind/example/featured-card",
    label: "Featured Card",
  },
  {
    id: 4,
    href: "/tailwind/example/image-gallery",
    label: "Image Gallery",
  },
  {
    id: 5,
    href: "/tailwind/example/timeline",
    label: "Timeline",
  },
  {
    id: 6,
    href: "/tailwind/example/instra-comment",
    label: "Instragram Comment",
  },
];
export type CommentType = { url: string; name: string; comment: string };

const comments: CommentType[] = [];

const LIMIT = 100;

for (let i = 1; i <= LIMIT; i++) {
  const info = {
    url: faker.image.avatar(),
    name: faker.person.fullName(),
    comment: faker.lorem.paragraph(2),
  };

  comments.push(info);
}

export { links, comments };
