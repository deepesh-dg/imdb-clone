import { defineField, defineType } from "sanity";

export default defineType({
    name: "movie",
    title: "Movie",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "storyline",
            title: "Storyline",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "poster",
            title: "Poster",
            type: "image",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "clipUrls",
            title: "Clip URLs",
            type: "array",
            of: [{ type: "url" }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "trailerUrl",
            title: "Trailer URL",
            type: "url",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "releaseDate",
            title: "Release Date",
            type: "date",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "genre",
            title: "Genre",
            type: "array",
            of: [{ type: "reference", to: [{ type: "genre" }] }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "actors",
            title: "Actors",
            type: "array",
            of: [{ type: "string" }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "director",
            title: "Director",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "producer",
            title: "Producer",
            type: "string",
            validation: Rule => Rule.required(),
        }),
    ],
});
