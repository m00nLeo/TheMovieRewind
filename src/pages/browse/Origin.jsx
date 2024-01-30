import React, { useEffect, useState } from "react";
import CarouselMovie from "../../components/CarouselMovie";
import LinkImage from "../../components/Movie/LinkImage";

const Origin = ({
  requests,
  imgPath,
  fetchMovieDetail,
  setModal,
  modal,
  setMovieDetail,
}) => {
  const [state, setState] = useState([]);

  const fetchMovie = async (apiLink) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/${requests[`${apiLink}`]}`
    );

    const data = await response.json();

    setState(data?.results);
  };

  useEffect(() => {
    fetchMovie("fetchNetflixOriginals");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{ color: "white", paddingTop: "20vh", paddingBottom: "2rem" }}
    >
      <CarouselMovie>
        {state.map((data, i) => (
          <LinkImage
            data={data}
            key={i}
            imgPath={imgPath}
            setModal={setModal}
            modal={modal}
            setMovieDetail={setMovieDetail}
            fetchMovieDetail={fetchMovieDetail}
          />
        ))}
      </CarouselMovie>
    </div>
  );
};

export default Origin;
