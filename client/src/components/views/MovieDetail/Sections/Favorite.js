import axios from "axios";
import { response } from "express";
import React, { useEffcet } from "react";

function Favorite(props) {
  const movieId = props.movieId;
  const userFrom = props.userFrom;
  const movieTitle = props.movieInfo.title;
  const moviePost = props.movieInfo.backdrop_path;
  const movieRunTime = props.movieInfo.runtime;

  useEffect(() => {
    let variables = {
      userFrom,
      movieId,
    };

    axios.post("/api/favorite/favoriteNumber", variables).then((response) => {
      if (response.data.succes) {
      } else [alert("숫자 정보를 가져오는데 실패 했습니다.")];
    });
  }, []);

  return (
    <div>
      <button> Favorite </button>
    </div>
  );
}

export default Favorite;
