import { Color } from "@tremor/react";
import { dateDiff } from "./helper";

export const colors: Color[] = [
  "indigo",
  "pink",
  "neutral",
  "orange",
  "blue",
  "emerald",
  "fuchsia",
  "cyan",
  "purple",
  "amber",
  "lime",
  "gray",
  "green",
  "red",
  "rose",
  "sky",
  "slate",
  "violet",
  "yellow",
];

export const downloadRange = [
  {
    label: "Last Week",
    value: "last-week",
  },
  {
    label: "1 Month",
    value: dateDiff(1),
  },
  {
    label: "3 Month",
    value: dateDiff(3),
  },
  {
    label: "6 Month",
    value: dateDiff(6),
  },
  {
    label: "1 Year",
    value: dateDiff(12),
  },
  {
    label: "2 Year",
    value: dateDiff(24),
  },
];

export const frontendSuggestion = [
  {
    title: "React Vs Vue",
    url: "react-vs-vue",
  },
  {
    title: "Zutand Vs Redux Vs Recoil",
    url: "zustand-vs-redux-vs-recoil",
  },
  {
    title: "@angular/core vs angular vs react vs vue",
    url: "@angular/core-vs-angular-vs-react-vs-vue",
  },
  {
    title: "Sass vs Less vs Stylus",
    url: "sass-vs-less-vs-stylus",
  },
  {
    title: "Webpack vs Parcel",
    url: "webpack-vs-parcel",
  },
  {
    title: "Jest vs Mocha vs Jasmine",
    url: "jest-vs-mocha-vs-jasmine",
  },

  {
    title: "Tailwind CSS vs Bootstrap",
    url: "tailwind-css-vs-bootstrap",
  },
];

export const backendSuggestion = [
  {
    title: "django vs flask",
    url: "django-vs-flask",
  },
  {
    title: "django vs laravel",
    url: "django-vs-laravel",
  },
  {
    title: "Express.js vs Koa.js",
    url: "express-vs-koa",
  },
  {
    title: "Node.js vs Bun",
    url: "node-vs-bun",
  },
  {
    title: "MongoDB vs PostgreSQL",
    url: "mongodb-vs-pg",
  },
  {
    title: "NestJS vs Fastify",
    url: "nest-vs-fastify",
  },
  {
    title: "Rust vs Go",
    url: "rust-vs-go",
  },
];
