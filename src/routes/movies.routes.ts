import { Router } from "express";
import { checkBodyIsValidMiddleware } from "../middlewares/checkBodyIsValid.middleware";
import { MovieSchemaRequest, MovieUpdateSchemaRequest } from "../schemas/movies.schemas";
import { createNewMovieController, deleteMovieController, readMoviesController, updateMovieController } from "../controllers/movies.controllers";
import { checkIfMovieNameAlreadyExistsMiddleware } from "../middlewares/checkIfMovieNameAlreadyExists.middleware";
import { checkExistenceOfMovieByIdMiddleware } from "../middlewares/checkExistenceOfMovieById.middleware";

const moviesRoutes: Router = Router()

moviesRoutes.post('', 
checkBodyIsValidMiddleware(MovieSchemaRequest), 
checkIfMovieNameAlreadyExistsMiddleware, 
createNewMovieController)

moviesRoutes.get('', readMoviesController)

moviesRoutes.patch('/:id', 
checkExistenceOfMovieByIdMiddleware,
checkIfMovieNameAlreadyExistsMiddleware,
checkBodyIsValidMiddleware(MovieUpdateSchemaRequest),
updateMovieController
)

moviesRoutes.delete('/:id',
checkExistenceOfMovieByIdMiddleware,  
deleteMovieController)

export {
    moviesRoutes
}