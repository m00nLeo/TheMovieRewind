import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import classes from "../../styles/UI/search/Search.module.css";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import MovieDetail from "../browse/MovieDetail ";

const API_KEY = "9e2e17fa377f03bdb4685e6345b6896a";
const Search = () => {
  const [state, setState] = useState([]),
    [searchState, setSearchState] = useState([]),
    [stateDetail, setStateDetail] = useState([]),
    [movieDetail, setMovieDetail] = useState([]),
    [modal, setModal] = useState(false),
    [query, setQuery] = useState("");

  const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  };

  const fetchMovieTrending = async (apiLink) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/${requests[`${apiLink}`]}`
    );

    const data = await response.json();

    setState(data.results);
  };

  const randomBanner = state[Math.floor(Math.random() * state?.length - 1)];

  useEffect(() => {
    fetchMovieTrending("fetchTrending");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fecthSearch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&include_adult=true&language=en-US&page=1`
    );

    const data = await response.json();

    setSearchState(data.results);
  };

  useEffect(() => {
    fecthSearch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const fetchMovieDetail = async (movie_id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}
      `
    );

    const data = await response.json();

    setStateDetail(data.results);
  };

  return (
    <div className="">
      <NavBar />
      <div style={{ marginBottom: "55vh" }}>
        <div className={classes.banner}>
          <img
            src={`https://image.tmdb.org/t/p/original/${randomBanner?.backdrop_path}`}
            alt=""
            className={classes.img}
          />
          <div className={classes.trailer_vignette}></div>
          <div className={classes.hero_vignette}></div>
        </div>
        <SearchForm setQuery={setQuery} fecthSearch={fecthSearch} />
      </div>
      <ResultList
        query={query}
        state={state}
        searchState={searchState}
        fetchMovieDetail={fetchMovieDetail}
        setModal={setModal}
        modal={modal}
        setMovieDetail={setMovieDetail}
      />

      {/* Movie Detail Modal */}
      <div className="">
        {modal && <MovieDetail data={stateDetail} movieDetail={movieDetail} />}
      </div>
    </div>
  );
};

export default Search;
