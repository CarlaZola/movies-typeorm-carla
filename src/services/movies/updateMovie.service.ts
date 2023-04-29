import { TMovie, TMovieUpdateRequest } from "../../interfaces/movies.interface"
import { movieRepository } from "../../utils/getRepository"

const updateMovieService = async (movieData: TMovieUpdateRequest, idUser: string): Promise<TMovie> => {
  
    const movieBefore: TMovie | null = await movieRepository.findOneBy({
        id: +(idUser)
    })

    const movieWithUpdatedData: TMovie = movieRepository.create({
        ...movieBefore,
        ...movieData
    })
    const movieUpdate: TMovie = await movieRepository.save(movieWithUpdatedData)

    return movieUpdate

}

export {
    updateMovieService
}