import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Origin from "./Origin";
import CarouselMovieType from "./CarouselMovieType";
import MovieDetail from "./MovieDetail ";

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "9e2e17fa377f03bdb4685e6345b6896a";
function Browse() {
  const [state, setState] = useState([]);
  const [stateDetail, setStateDetail] = useState([]);
  const [movieDetail, setMovieDetail] = useState([]);
  const [modal, setModal] = useState(false);

  const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
  };

  const fetchMovie = async (apiLink) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/${requests[`${apiLink}`]}`
    );

    const data = await response.json();

    setState(data.results);
  };

  useEffect(() => {
    fetchMovie("fetchTrending");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <div style={{ marginBottom: "55vh" }}>
        <Banner data={state} />
      </div>

      {/* Movie Carousel */}
      <>
        {/* Origin */}
        <Origin
          requests={requests}
          imgPath={"poster"}
          fetchMovieDetail={fetchMovieDetail}
          setModal={setModal}
          modal={modal}
          setMovieDetail={setMovieDetail}
        />

        {/* Trending */}
        <CarouselMovieType
          requests={requests}
          title={"Trending"}
          fetchMovieAPI={"fetchTrending"}
          fetchMovieDetail={fetchMovieDetail}
          setModal={setModal}
          modal={modal}
          setMovieDetail={setMovieDetail}
        />

        {/* Top Rated */}
        <CarouselMovieType
          requests={requests}
          title={"Top Rated"}
          fetchMovieAPI={"fetchTopRated"}
          fetchMovieDetail={fetchMovieDetail}
          setModal={setModal}
          modal={modal}
          setMovieDetail={setMovieDetail}
        />

        {/* Action Movies */}
        <CarouselMovieType
          requests={requests}
          title={"Action"}
          fetchMovieAPI={"fetchActionMovies"}
          fetchMovieDetail={fetchMovieDetail}
          setModal={setModal}
          modal={modal}
          setMovieDetail={setMovieDetail}
        />

        {/* Comedy Movies */}
        <CarouselMovieType
          requests={requests}
          title={"Comedy"}
          fetchMovieAPI={"fetchComedyMovies"}
          fetchMovieDetail={fetchMovieDetail}
          setModal={setModal}
          modal={modal}
          setMovieDetail={setMovieDetail}
        />

        {/* Horror Movies */}
        <CarouselMovieType
          requests={requests}
          title={"Horror"}
          fetchMovieAPI={"fetchHorrorMovies"}
          fetchMovieDetail={fetchMovieDetail}
          setModal={setModal}
          modal={modal}
          setMovieDetail={setMovieDetail}
        />

        {/* Romance Movies */}
        <CarouselMovieType
          requests={requests}
          title={"Romance"}
          fetchMovieAPI={"fetchRomanceMovies"}
          fetchMovieDetail={fetchMovieDetail}
          setModal={setModal}
          modal={modal}
          setMovieDetail={setMovieDetail}
        />

        {/* Documentaries Movies */}
        <CarouselMovieType
          requests={requests}
          title={"Documentaries"}
          fetchMovieAPI={"fetchDocumentaries"}
          fetchMovieDetail={fetchMovieDetail}
          setModal={setModal}
          modal={modal}
          setMovieDetail={setMovieDetail}
        />
      </>

      {/* Movie Detail Modal */}
      <div className="">
        {modal && <MovieDetail data={stateDetail} movieDetail={movieDetail} />}
      </div>
    </div>
  );
}

export default Browse;
