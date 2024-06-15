import { SanityDocument, groq } from "next-sanity";
import sanityClient from "../client";

export type User = {
    clerkId: string;
    username: string;
    email: string;
};

export type UserDocument = SanityDocument<User>;

export async function getUser(id: string) {
    const user = await sanityClient.fetch<UserDocument>(groq`*[_id == $id][0]`);
    return user;
}

export async function getUserByClerkId(id: string) {
    const user = await sanityClient.fetch<UserDocument>(
        groq`*[_type == 'user' && clerkId == $id][0]`
    );
    return user;
}

export async function getUsers() {
    const users = await sanityClient.fetch<UserDocument[]>(groq`*[_type == 'user']`);
    return users;
}

export async function createUser(user: User) {
    const result = await sanityClient.createIfNotExists({
        ...user,
        _type: "user",
        _id: `clerk-user-${user.clerkId}`,
    });
    return result;
}
