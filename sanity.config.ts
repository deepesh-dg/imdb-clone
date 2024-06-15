import schemas from "@/sanity/schemas";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
    // apiHost: "http://localhost:3333",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: "production",
    title: "IMDB Clone",
    basePath: "/admin",
    apiVersion: "2024-06-14",
    plugins: [structureTool()],
    schema: {
        types: schemas,
    },
});

export default config;
