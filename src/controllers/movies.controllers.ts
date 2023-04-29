import { Request, Response } from "express";
import { TGetMoviesResponse, TMovie, TMovieRequest, TMovieUpdateRequest } from "../interfaces/movies.interface";
import { createNewMovieService } from "../services/movies/createNewMovie.service";
import { readMoviesService } from "../services/movies/readFilmes.service";
import { updateMovieService } from "../services/movies/updateMovie.service";
import { deleteMovieService } from "../services/movies/deleteMovie.service";

const createNewMovieController = async(req: Request, res: Response): Promise<Response> => {

    const newMovie: TMovieRequest = req.body

    const createdMovie: TMovie = await createNewMovieService(newMovie)

    return res.status(201).json(createdMovie)
}

const readMoviesController =  async(req:Request, res: Response): Promise<Response > =>{

    const getMoviesByQuery: TGetMoviesResponse | void = await readMoviesService(req)
    
    return res.json(getMoviesByQuery)
}

const updateMovieController = async(req:Request, res: Response): Promise<Response>  => {
    const { idUser } = res.locals
 
    const updateMovie: TMovie | void = await updateMovieService(req.body, idUser)

    return res.json(updateMovie)
}

const deleteMovieController = async(req:Request, res: Response): Promise<Response> => {

    const { idUser } = res.locals

    await deleteMovieService(idUser)

    return res.status(204).send()
}

export {
    createNewMovieController,
    readMoviesController,
    updateMovieController,
    deleteMovieController
}