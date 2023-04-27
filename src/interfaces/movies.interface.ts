import { z } from "zod"
import { MovieSchema, MovieSchemaRequest } from "../schemas/movies.schemas"

type TMovieRequest = z.infer<typeof MovieSchemaRequest>
type TMovie = z.infer<typeof MovieSchema>


export {
    TMovieRequest,
    TMovie
}
