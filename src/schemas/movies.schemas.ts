import { z } from "zod";

const MovieSchema = z.object({
    id: z.number(),
    name: z.string().max(50),
    description: z.string().nullish(),
    duration: z.number().positive().int(),
    price: z.number().int()

})

const MovieSchemaRequest = MovieSchema.omit({id: true})

const MovieUpdateSchemaRequest = MovieSchemaRequest.partial()

const AllMoviesSchemas = z.array(MovieSchema)

const getMovieObjectSchema = z.object({
    prevPage: z.string().nullish(),
    nextPage: z.string().nullish(),
    count: z.number(),
    data: AllMoviesSchemas
})


export {
    MovieSchema,
    MovieSchemaRequest,
    AllMoviesSchemas,
    getMovieObjectSchema,
    MovieUpdateSchemaRequest
}