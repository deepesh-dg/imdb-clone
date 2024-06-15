import "server-only";
import { groq } from "next-sanity";
import sanityClient from "./client";

export type User = {
    _id: string;
    _type: "user";
    clerkId: string;
    name: string;
    email: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
};

export async function getUsers() {
    const users = await sanityClient.fetch<User[]>(groq`*[_type == "user"]`);
    return users;
}
