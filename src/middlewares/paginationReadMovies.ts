import { NextFunction, Request, Response } from "express";
import { movieRepository } from "../utils/getRepository";


const pagination = async (req: Request, res: Response, next: NextFunction) => {

    let {page, perPage, sort = 'id', order = 'asc'}: any = req.query
   
    if(!Number(page) || page < 1 || page % 1 !== 0){   
        page = 1     
    }

    if(!Number(perPage) || perPage < 1 || perPage > 5 || perPage % 1 !== 0){
        perPage = 5
    }

    if(sort === 'id' && order === 'desc'){
        order = 'asc'
    }

    const count: number = await movieRepository.count()
    const totalPage = parseInt((count / perPage).toString())
    const checkPrevPage = page > 1 ? `http://localhost:3000/movies?page=${+(page) - 1}&perPage=${perPage}` : null
    const checkNextPage = page <= totalPage ?  `http://localhost:3000/movies?page=${(+page) +1}&perPage=${perPage}` : null

    res.locals.pagination = {
        page,
        perPage,
        count,
        sort, 
        order,
        checkPrevPage,
        checkNextPage
    }

    return next()
}


export {
    pagination
}