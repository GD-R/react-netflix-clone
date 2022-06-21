

const apiKey = "55cff57a6a97e971e886370af5fd227a";

const baseUrl = "https://api.themoviedb.org/3";

const ApiRequest = {
    fetchTrendingAll : `${baseUrl}/trending/all/week?api_key=${apiKey}`,
    fetchPopularMovie: `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    fetchTopMovie: `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    fetchUpComingMovie: `${baseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
    fetchPopularTv: `${baseUrl}/tv/popular?api_key=${apiKey}&language=en-US&page=1`,
    fetchTopTv: `${baseUrl}/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    fetchUpComingTv: `${baseUrl}/tv/airing_today?api_key=${apiKey}&language=en-US&page=1`,
    fetchSearch: `${baseUrl}/search/multi?api_key=${apiKey}&language=en-US&page=1`,
    imageUrl: `https://image.tmdb.org/t/p`
}

export {apiKey}

export default ApiRequest