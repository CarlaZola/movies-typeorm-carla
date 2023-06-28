import { Request, Response } from "express";
import { TGetMoviesResponse, TMovie } from "../../interfaces/movies.interface";
import { movieRepository } from "../../utils/getRepository";


const readMoviesService = async(req: Request, res: Response): Promise<TGetMoviesResponse | void> => {

    let {page, perPage, count, sort, order, checkPrevPage, checkNextPage}: any = res.locals.pagination

    let movies: Array<TMovie>
   
    movies = await movieRepository.find({
        order: {[sort]: order},
        skip: (page - 1) * perPage,
        take: perPage,
    }) 


    const returnGetMovies: TGetMoviesResponse = {
        prevPage : checkPrevPage,
        nextPage : checkNextPage,
        count,
        data: movies
    }
    return returnGetMovies
}

export {
    readMoviesService
}