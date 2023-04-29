import { NextFunction, Request, Response } from "express";
import { movieRepository } from "../utils/getRepository";
import { AppError } from "../error";

const checkExistenceOfMovieByIdMiddleware = async(req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    
    const { id } = req.params

    const movieById = await movieRepository.findOneBy({
        id: +(id)
    })

    if(!movieById){
        throw new AppError('Movie not found', 404)
    }

    res.locals.idUser = id
    return next()
}


export {
    checkExistenceOfMovieByIdMiddleware
}