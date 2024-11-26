import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";

function RowList() {
  return (
    <div>
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row title={"Trending now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rated Movies"} fetchUrl={requests.fetchTopRatedMovies} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"TvShow"} fetchUrl={requests.fetchTvShow} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default RowList;
