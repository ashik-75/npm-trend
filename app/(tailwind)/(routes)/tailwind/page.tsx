import Image from "next/image";
import Link from "next/link";
import React from "react";

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
];

const Home = () => {
  return (
    <div className="h-full space-y-5 p-5 md:p-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {links.map((link) => (
          <div key={link.id}>
            <Card key={link.id} href={link.href} title={link.label} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
// info@storex.com.bd
const Card = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      href={href}
      className="font-inter block cursor-pointer  space-y-2 rounded-3xl border p-5 duration-200 hover:border-gray-200 dark:border-gray-600  dark:hover:border-gray-400 "
    >
      <div className="relative h-[100px] w-[100px] overflow-hidden rounded-2xl">
        <Image
          src={"/image/four.jpg"}
          fill
          alt="fuck"
          className="object-cover"
        />
      </div>
      <h1 className="text-lg font-bold text-gray-600 dark:text-gray-300">
        {title}
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        The all in one starter kit for building multi tenant applications
      </p>

      <div>
        <span className="rounded-xl border px-2 py-1 text-xs dark:border-gray-500 dark:text-gray-300">
          UI Components
        </span>
      </div>
    </Link>
  );
};
