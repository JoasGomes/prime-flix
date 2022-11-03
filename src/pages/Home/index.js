import { useEffect, useState } from "react";
import api from "../../services/api";

// https://api.themoviedb.org/3/movie/now_playing?api_key=cec8a9b238bd28fd3624498dbcc783fe&language=pt-br

function Home() {
    const [filmes, setFilmes] = useState([])


    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "cec8a9b238bd28fd3624498dbcc783fe",
                    language: "pt-BR",
                    page: 1
                }
            })

            console.log(response.data.results)
        }

        loadFilmes();

    }, [])

    return(
        <div>
            <h1>BEM VINDO A HOME</h1>
        </div>
    )
}

export default Home;