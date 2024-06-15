import schemas from "@/sanity/schemas";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
    title: "IMDB Clone",
    basePath: "/admin",
    apiVersion: "2024-06-14",
    plugins: [structureTool()],
    schema: {
        types: schemas,
    },
});

export default config;
