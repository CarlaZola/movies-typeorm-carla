import { Request, request } from "express";
import { TGetMoviesResponse, TMovie } from "../../interfaces/movies.interface";
import { movieRepository } from "../../utils/getRepository";


const readMoviesService = async(req: Request): Promise<TGetMoviesResponse | void> => {

    let {page, perPage, sort = 'id', order = 'asc'}: any = req.query

    let movies: Array<TMovie>
   
    if(!Number(page) || page < 1 || page % 1 !== 0){   
        page = 1     
    }

    if(!Number(perPage) || perPage < 1 || perPage > 5 || perPage % 1 !== 0){
        perPage = 5
    }

    if(sort === 'id' && order === 'desc'){
        order = 'asc'
    }

    movies = await movieRepository.find({
        order: {[sort]: order},
        skip: (page - 1) * perPage,
        take: perPage,
    }) 

    const count: number = await movieRepository.count()
    const totalPage = parseInt((count / perPage).toString())
    const checkPrevPage = page > 1 ? `http://localhost:3000/movies?page=${+(page) - 1}&perPage=${perPage}` : null
    const checkNextPage = page <= totalPage ?  `http://localhost:3000/movies?page=${(+page) +1}&perPage=${perPage}` : null


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