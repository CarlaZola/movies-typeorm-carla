import { Request, Response } from "express";
import { TMovie, TMovieRequest } from "../interfaces/movies.interface";
import { createNewMovieService } from "../services/movies/createNewMovie.service";

const createNewMovieController = async(req: Request, res: Response): Promise<Response> => {

    const newMovie: TMovieRequest = req.body

    const createdMovie: TMovie = await createNewMovieService(newMovie)

    return res.status(201).json(createdMovie)
}

const readMoviesController =  async(req: Request, res: Response): Promise<Response> =>{

    
    return res.json()
}

export {
    createNewMovieController
}