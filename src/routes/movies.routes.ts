import { Router } from "express";
import { checkBodyIsValidMiddleware } from "../middlewares/checkBodyIsValid.middleware";
import { MovieSchemaRequest } from "../schemas/movies.schemas";
import { createNewMovieController } from "../controllers/movies.controllers";
import { checkIfMovieNameAlreadyExistsMiddleware } from "../middlewares/checkIfMovieNameAlreadyExists.middleware";

const moviesRoutes: Router = Router()

moviesRoutes.post('', 
checkBodyIsValidMiddleware(MovieSchemaRequest), 
checkIfMovieNameAlreadyExistsMiddleware, 
createNewMovieController)

export {
    moviesRoutes
}