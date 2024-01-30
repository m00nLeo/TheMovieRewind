import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import CarouselMovie from "../../components/CarouselMovie";
import LinkImage from "../../components/Movie/LinkImage";

const CarouselMovieType = ({
  requests,
  title,
  fetchMovieAPI,
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
    fetchMovie(fetchMovieAPI);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ height: "340px" }}>
      <Card>
        <p
          style={{
            color: "white",
            borderLeft: "0.2rem solid firebrick",
            paddingLeft: "0.5rem",
            fontSize: "1.3rem",
            fontWeight: "bold",
          }}
        >
          {title}
        </p>
      </Card>
      <div style={{ transform: "translate(0, -35%)" }}>
        <CarouselMovie>
          {state.map((data, i) => (
            <LinkImage
              data={data}
              key={i}
              imgPath={"backdrop"}
              setModal={setModal}
              modal={modal}
              setMovieDetail={setMovieDetail}
              fetchMovieDetail={fetchMovieDetail}
            />
          ))}
        </CarouselMovie>
      </div>
    </div>
  );
};

export default CarouselMovieType;
