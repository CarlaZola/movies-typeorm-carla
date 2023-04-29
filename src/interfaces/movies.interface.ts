import { z } from "zod"
import { AllMoviesSchemas, MovieSchema, MovieSchemaRequest, getMovieObjectSchema } from "../schemas/movies.schemas"
import { DeepPartial } from "typeorm"

type TMovieRequest = z.infer<typeof MovieSchemaRequest>

type TMovie = z.infer<typeof MovieSchema>

type TGetMoviesResponse = z.infer<typeof getMovieObjectSchema>

type TMovieUpdateRequest = DeepPartial<TMovieRequest>


export {
    TMovieRequest,
    TMovie,
    TGetMoviesResponse,
    TMovieUpdateRequest  
}
