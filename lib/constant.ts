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
    title: "React Native Vs Flutter",
    url: "react-native-vs-flutter",
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
    title: "TypeScript vs JavaScript",
    url: "typescript-vs-javascript",
  },
  {
    title: "Jest vs Mocha vs Jasmine",
    url: "jest-vs-mocha-vs-jasmine",
  },
  {
    title: "Next.js vs Nuxt.js",
    url: "nextjs-vs-nuxtjs",
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
    title: "Node.js vs Ruby on Rails",
    url: "node-vs-rails",
  },
  {
    title: "MongoDB vs PostgreSQL",
    url: "mongodb-vs-postgresql",
  },
  {
    title: "GraphQL vs REST",
    url: "graphql-vs-rest",
  },
  {
    title: "Spring Boot vs Micronaut",
    url: "spring-boot-vs-micronaut",
  },
  {
    title: "ASP.NET Core vs Django",
    url: "aspnet-core-vs-django",
  },
  {
    title: "NestJS vs Fastify",
    url: "nestjs-vs-fastify",
  },
  {
    title: "Rust vs Go",
    url: "rust-vs-go",
  },
];
