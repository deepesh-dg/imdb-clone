import "server-only";
import { createClient } from "next-sanity";

const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
    apiVersion: "2024-06-14",
    token: process.env.SECRET_SANITY_VIEW_TOKEN,
    perspective: "published",
});

export default sanityClient;
