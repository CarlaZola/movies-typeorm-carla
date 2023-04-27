import { Movie } from "../../entities/index"
import { TMovie, TMovieRequest } from "../../interfaces/movies.interface"
import { movieRepository } from "../../utils/getRepository"

const createNewMovieService = async ( movieData: TMovieRequest ): Promise<TMovie> => {
    
    const movie: Movie = movieRepository.create(movieData)

    await movieRepository.save(movie)

    return movie
}

export {
    createNewMovieService
}