import { defineField, defineType } from "sanity";

export default defineType({
    name: "ratingAndReview",
    title: "Rating and Review",
    type: "document",
    fields: [
        defineField({
            name: "rating",
            title: "Rating",
            type: "number",
            validation: Rule => [Rule.required(), Rule.integer(), Rule.min(0), Rule.max(10)],
        }),
        defineField({
            name: "review",
            title: "Review",
            type: "string",
        }),
        defineField({
            name: "movie",
            title: "Movie",
            type: "reference",
            to: [{ type: "movie" }],
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
