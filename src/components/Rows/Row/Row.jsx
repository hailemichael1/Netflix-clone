import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../Utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        // console.log(fetchUrl);

        const request = await axios.get(fetchUrl);

        // console.log(request.data.results);

        setMovies(request.data.results);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
        //   console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParams.get("v"));
        //   console.log(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const opts = {
    height: "300vh",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  return (
    <section className="row">
      <h1>{title}</h1>

      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_PosterLarge"}`}
          />
        ))}
      </div>

      <div style={{padding: '40px'}}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </section>
  );
}

export default Row;
