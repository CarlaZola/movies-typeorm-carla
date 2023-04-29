import { movieRepository } from "../../utils/getRepository"

const deleteMovieService = async (userId :string): Promise<void> => {

    await movieRepository.delete(+(userId))

    return 
}

export {
    deleteMovieService
}