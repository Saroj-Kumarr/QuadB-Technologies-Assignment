import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Shimmer from "./Shimmer";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (!movies) return <Shimmer />;

  return (
    <div className="flex pt-24  py-3 bg-[#2C333F] justify-center gap-8 flex-wrap items-center">
      {movies.map(
        ({
          show: {
            id,
            genres,
            image,
            name,
            language,
            premiered,
            rating,
            runtime,
            status,
            network,
          },
        }) => (
          <MovieCard
            key={id}
            name={name}
            image={image}
            language={language}
            rating={rating}
            runtime={runtime}
            status={status}
            genres={genres}
            released={premiered}
            country={network?.country?.name}
          />
        )
      )}
    </div>
  );
};

export default Home;
