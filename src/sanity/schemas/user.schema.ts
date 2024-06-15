import { defineField, defineType } from "sanity";

export default defineType({
    name: "user",
    title: "User",
    type: "document",
    fields: [
        defineField({
            name: "clerkId",
            title: "Clerk ID",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "username",
            title: "Username",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "email",
            validation: Rule => Rule.required(),
        }),
    ],
});
