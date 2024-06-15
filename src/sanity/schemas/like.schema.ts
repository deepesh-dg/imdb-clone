import { defineField, defineType } from "sanity";

export default defineType({
    name: "like",
    title: "Like",
    type: "document",
    fields: [
        defineField({
            name: "ratingAndReview",
            title: "Rating and Review",
            type: "reference",
            to: [{ type: "ratingAndReview" }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "user",
            title: "User",
            type: "reference",
            to: [{ type: "user" }],
            validation: Rule => Rule.required(),
        }),
    ],
});
