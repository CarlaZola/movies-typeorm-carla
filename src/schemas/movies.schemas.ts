import { z } from "zod";

const MovieSchema = z.object({
    id: z.number(),
    name: z.string().max(50),
    description: z.string().nullish(),
    duration: z.number().positive().int(),
    price: z.number().int()

})

const MovieSchemaRequest = MovieSchema.omit({id: true})

const AllMoviesSchemas = z.array(MovieSchema)


export {
    MovieSchema,
    MovieSchemaRequest,
    AllMoviesSchemas
}