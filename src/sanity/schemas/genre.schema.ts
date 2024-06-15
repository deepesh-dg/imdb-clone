import { defineField, defineType } from "sanity";

export default defineType({
    name: "genre",
    title: "Genre",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name", //  this "name" refers to the field name defined above
            },

            validation: Rule => Rule.required(),
        }),
    ],
});
