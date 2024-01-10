import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (duration = 5000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve("RESOLVE Promise");
    }, duration);
  });
};

export async function Await<T>({
  promise,
  children,
}: {
  promise: Promise<T>;
  children: (value: T) => JSX.Element;
}) {
  let data = await promise;

  return children(data);
}
