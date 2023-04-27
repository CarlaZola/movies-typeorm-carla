import { NextFunction, Request, Response } from "express";
import { movieRepository } from "../utils/getRepository";
import { AppError } from "../error";

type TRequestName = {
    name: string
}

const checkIfMovieNameAlreadyExistsMiddleware = async(req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    
    const { name }: TRequestName = req.body

    const movieByName: boolean = await movieRepository.exist({
        where: {
            name: name
        }
    })

    if(movieByName){
        throw new AppError('Movie already exists.', 409)

    }else{
        return next()
    }
}


export {
    checkIfMovieNameAlreadyExistsMiddleware
}