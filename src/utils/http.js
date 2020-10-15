import axios from 'axios'

const API_BASE = 'https://api.themoviedb.org/3/'

const http = axios.create({
  baseURL: API_BASE
})

export default http

/**
 *     const original = await getOriginal()
    const trending = await getTrending()
    const topRated = await getTopRated()
    const actions = await getActionMovies()
    const comedy = await getComedyMovies()
    const horror = await getHorrorMovies()
    const romantic = await getRomanticMovies()
    const documentaries = await getDocumetaries()

    return [original,trending,topRated,actions,comedy,horror,romantic,documentaries]
 */