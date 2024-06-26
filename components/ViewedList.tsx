import { useEffect, useState } from "react";
import { useMovieStore } from "@/store/movieStore";
import ViewedHeader from "./ViewedHeader";
import ViewedCard from "./ViewedCard";
import { SpinnerIcon } from "./icons/Icons";
import SortMovies from "./SortMovies";
import FilterMovies from "./FilterMovies";

const ViewedList = () => {
  const { viewed, genres } = useMovieStore();
  const [movieData, setMovieData] = useState(viewed)

  useEffect( () => {
    setMovieData(viewed)
  }, [viewed])

  if (genres?.[0] == undefined) return <SpinnerIcon />;
  
  return (
    <div className="compact">
      <ViewedHeader />
      <div className="flex justify-between mb-5">
        <SortMovies data={viewed} setData={(data) => setMovieData(data)} origin="viewed"/>
        <FilterMovies data={viewed} setData={(data) => setMovieData(data)} />
      </div>
      {viewed[0] == undefined && (
        <h1 className="text-2xl flex justify-center m-5 font-bold">
          No movies to show. Click on `&apos;Add Record&apos; to add movies you have viewed
          and share with your friends.
        </h1>
      )}
      {movieData[0] == undefined && (
        <h1 className="text-2xl flex justify-center m-5 font-bold">
          No Movies to show!
        </h1>
      )}
      {movieData.map((movie) => {
        return (
          <ViewedCard
            key={movie.imdbID}
            Poster={movie.Poster}
            Type={movie.Type}
            Title={movie.Title}
            imdbRating={movie.imdbRating}
            availableOn={movie.availableOn}
            imdbID={movie.imdbID}
            Director={movie.Director}
            Writer={movie.Writer}
            Actors={movie.Actors}
            Language={movie.Language}
            Country={movie.Country}
            Awards={movie.Awards}
            Genre={movie.Genre}
            Released={movie.Released}
            myRating={movie.myRating}
            imdbVotes={movie.imdbVotes}
            customRatingFields={movie.customRatingFields}
          />
        );
      })}
    </div>
  );
};

export default ViewedList;
