import React from "react";
import { IoMdStar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setIsOpen } from "../redux/movieSlice";

const Summary = () => {
  const { movies } = useSelector((state) => state.movie);

  const { isOpen } = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  const { id } = useParams();

  const movie = movies.find((movie) => movie.show.id === parseInt(id));

  const {
    genres,
    image,
    name,
    language,
    premiered: released,
    rating,
    runtime,
    status,
    network,
    summary,
  } = movie.show;

  const country = network?.country?.name;

  const cleanedSummary = summary
    ? summary.replace(/<\/?p[^>]*>/g, "").replace(/<\/?b[^>]*>/g, "")
    : "Unavailable";

  return (
    <div className=" h-screen  pt-20 flex items-center justify-center">
      {!isOpen ? (
        <div className="custom-shadow bg-white hover:scale-105 duration-200 gap-2 flex w-[40rem] rounded-md p-2">
          <div className="w-6/12">
            <img
              src={image?.original}
              alt="movie"
              className="object-cover rounded-l-md w-full h-full"
            />
          </div>

          <div className="relative w-6/12 flex flex-col gap-1 text-sm">
            <h3 className="text-3xl font-bold tracking-wider text-cyan-700 ">
              {name}
            </h3>
            <p>Language : {language}</p>
            <ul className="flex gap-1 flex-wrap items-center ">
              <li>Genres : </li>
              {genres.map((genre) => (
                <li
                  className="bg-gray-300 rounded-sm px-1 py-[2px] text-sm"
                  key={genre}
                >
                  {genre}
                </li>
              ))}
            </ul>

            <span>
              Runtime : {runtime ? runtime + " minutes" : "Unavailable"}
            </span>

            <span>Country : {country ? country : "Unavailable"}</span>

            <p className="font-bold">
              Summary : <span className="text-xs font-normal ">{cleanedSummary}</span>
            </p>

            <div
              className="flex gap-1 absolute   px-1  
              rounded-md 
        items-center right-0 top-0 custom-shadow text-cyan-700 font-bold"
            >
              <IoMdStar className=" text-2xl" />
              {rating.average ? (
                <span className="text-lg">{rating.average}</span>
              ) : (
                <span className="text-sm">Unavailable</span>
              )}
            </div>

            <button
              onClick={() => dispatch(setIsOpen(true))}
              className=" py-2 absolute bottom-1 font-bold right-1 text-cyan-700 custom-shadow rounded-md w-full  duration-500 border-cyan-700"
            >
              Book Show
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-whtie p-5 w-96 rounded-md  custom-shadow bg-white">
          <form className="flex flex-col gap-3 ">
            <h3 className="font-bold text-2xl  text-center text-cyan-700">
              Movie Form
            </h3>
            <input
              className="px-2 py-2 rounded-md border-2 focus:outline-none"
              type="text"
              value={name}
            />
            <input
              className="px-2 py-2 rounded-md border-2 focus:outline-none"
              type="text"
              value={language}
            />
            <input
              className="px-2 py-2 rounded-md border-2 focus:outline-none"
              type="text"
              value={status}
            />
            <input
              className="px-2 py-2 rounded-md border-2 focus:outline-none"
              type="text"
              value={released && released}
            />
            <button
              className=" py-2 font-bold custom-shadow text-cyan-700 rounded-md w-full"
              onClick={() => dispatch(setIsOpen(false))}
            >
              Back to Summary
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Summary;
