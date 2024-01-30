import React from "react";
import CarouselMovie from "../../components/CarouselMovie";
import Card from "../../components/Card";
import LinkImage from "../../components/Movie/LinkImage";
import classes from "../../styles/UI/search/ResultList.module.css";

const ResultList = ({
  state,
  searchState,
  query,
  fetchMovieDetail,
  setModal,
  modal,
  setMovieDetail,
}) => {
  return (
    <div className={classes.searchResults} style={{ color: "white" }}>
      <Card>
        <p
          style={{
            color: "white",
            fontSize: "1.3rem",
            fontWeight: "bold",
          }}
        >
          Recommemded&nbsp;
          {searchState?.length <= 0 ? (
            <></>
          ) : (
            <span>({searchState?.length})</span>
          )}
        </p>
      </Card>
      <div style={{ transform: "translate(0, -35%)" }}>
        {query === "" ? (
          <div className="" style={{ height: "300px" }}>
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
        ) : (
          <>
            {searchState?.length <= 0 ? (
              <div
                style={{
                  textAlign: "center",
                  width: "100%",
                  padding: "6rem 24rem",
                  fontSize: "1.8rem",
                }}
              >
                Sorry, we currently don't have the "{query}" movie available!
                <br />
                You might want to try another movie 👉👈
              </div>
            ) : (
              <Card>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: 20,
                    padding: "1rem 0",
                    position: "absolute",
                  }}
                >
                  {searchState.map((data, i) => (
                    <LinkImage
                      data={data}
                      key={i}
                      imgPath={"poster"}
                      setModal={setModal}
                      modal={modal}
                      setMovieDetail={setMovieDetail}
                      fetchMovieDetail={fetchMovieDetail}
                    />
                  ))}
                </div>
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ResultList;
