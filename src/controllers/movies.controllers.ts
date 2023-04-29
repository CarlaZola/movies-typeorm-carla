import { Request, Response } from "express";
import { TGetMoviesResponse, TMovie, TMovieRequest } from "../interfaces/movies.interface";
import { createNewMovieService } from "../services/movies/createNewMovie.service";
import { readMoviesService } from "../services/movies/readFilmes.service";

const createNewMovieController = async(req: Request, res: Response): Promise<Response> => {

    const newMovie: TMovieRequest = req.body

    const createdMovie: TMovie = await createNewMovieService(newMovie)

    return res.status(201).json(createdMovie)
}

const readMoviesController =  async(req:Request, res: Response): Promise<Response > =>{

    const getMoviesByQuery: TGetMoviesResponse | void = await readMoviesService(req)
    
    return res.json(getMoviesByQuery)
}

export {
    createNewMovieController,
    readMoviesController
}