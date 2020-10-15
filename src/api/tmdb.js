import http from '../utils/http'

const API_KEY = 'API_KEY'

/**
 * - Originais da Netflix
 * - Recomendados (filmes em destaque)
 * - Em alta
 * - Ação
 * - Comédia
 * - Terror
 * - Romance
 * - Documentários
 * 
 *  const original = await getOriginal()
    const trending = await getTrending()
    const topRated = await getTopRated()
    const actions = await getActionMovies()
    const comedy = await getComedyMovies()
    const horror = await getHorrorMovies()
    const romantic = await getRomanticMovies()
    const documentaries = await getDocumetaries()
 * 
 */

export default {
    getHomeList : async () =>{
       return [
           {
               slug: 'originals',
               title : "Originais do Netflix",
               items : await http.get(`/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'trending',
               title : "Recomendados para Você",
               items : await http.get(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'toprated',
               title : "Em Alta",
               items : await http.get(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'action',
               title : "Ação",
               items : await http.get(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'comedy',
               title : "Comédia",
               items : await http.get(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'horror',
               title : "Terror",
               items : await http.get(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'romance',
               title : "Romance",
               items : await http.get(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
           },            
           {
               slug: 'documentary',
               title : "Documentários",
               items : await http.get(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
           },
       ];
    },

    getMovieInfo : async (movieId, type) =>{
       let info = {};
       if(movieId) {
           switch(type){
               case 'movei':
                   info = await http.get(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
               break;
                case 'tv':
                   info = await http.get(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
               break;
               default:
                   info = null;
               break;
           }
       }

        return info;
    }
}
    