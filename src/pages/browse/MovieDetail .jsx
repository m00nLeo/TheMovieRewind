import React from "react";
import classes from "../../styles/UI/browse/MovieDetail.module.css";
import Card from "../../components/Card";
import YouTube from "react-youtube";

const MovieDetail = ({ data, movieDetail }) => {
  const detailFilterYtb = data?.filter((movie) => movie.site === "YouTube");
  const detailFilter = detailFilterYtb?.some(
    (movie) => movie.type === "Trailer"
  )
    ? detailFilterYtb?.find((movie) => movie.type === "Trailer")
    : detailFilterYtb?.find((movie) => movie.type === "Teaser");

  const opts = {
    height: "390",
    width: "691",
    playerVars: {
      autoplay: 1,
    },
  };
  const renderTitle =
    movieDetail?.original_title === undefined
      ? movieDetail?.original_title
      : movieDetail?.title;
  return (
    <div className={classes.detail}>
      <Card>
        <div className={classes.detailContent}>
          <div className="" style={{ color: "white" }}>
            {/* title */}
            <div className={classes.title}>{renderTitle}</div>
            {/* date */}
            <div
              style={{
                fontWeight: "500",
                fontSize: "1rem",
                paddingBottom: "0.2rem",
              }}
            >
              Release Date:{" "}
              {movieDetail?.first_air_date === undefined
                ? movieDetail?.release_date
                : movieDetail?.first_air_date}
            </div>
            {/* vote */}

            <div
              style={{
                fontWeight: "500",
                fontSize: "1rem",
                paddingBottom: "1.5rem",
              }}
            >
              Audience Vote: {movieDetail.vote_average}/10
            </div>
            {/* overview */}
            <div
              style={{
                fontWeight: "300",
                fontSize: "0.9rem",
                textAlign: "justify",
              }}
            >
              {movieDetail.overview}
            </div>
          </div>

          {/* Youtube trailer */}
          <div className="">
            {detailFilter?.key === undefined ? (
              <>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}`}
                  alt={renderTitle}
                  style={{
                    height: "390px",
                    width: "691px",
                  }}
                />
              </>
            ) : (
              <YouTube videoId={detailFilter?.key} opts={opts} />
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MovieDetail;
