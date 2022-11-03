import axios from 'axios';


// base da url: https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/now_playing?api_key=cec8a9b238bd28fd3624498dbcc783fe&language=pt-br


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;