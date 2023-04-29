import { z } from "zod"
import { AllMoviesSchemas, MovieSchema, MovieSchemaRequest, getMovieObjectSchema } from "../schemas/movies.schemas"

type TMovieRequest = z.infer<typeof MovieSchemaRequest>
type TMovie = z.infer<typeof MovieSchema>

type TGetMoviesResponse = z.infer<typeof getMovieObjectSchema>


export {
    TMovieRequest,
    TMovie,
    TGetMoviesResponse,
   
}
