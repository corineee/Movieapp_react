import React from "react";
import { Descriptions, Badge } from "antd";
import MovieDetail from "../MovieDetail";

function MovieInfo(props) {
  let movie = props;

  return (
    <Descriptions title="Movie Info" bordered>
      <Descriptions.Item label="Title">
        {MovieDetail.original_title}
      </Descriptions.Item>
      <Descriptions.Item label="release_date">
        {MovieDetail.release_date}
      </Descriptions.Item>
      <Descriptions.Item label="revenue">
        {MovieDetail.revenue}
      </Descriptions.Item>
      <Descriptions.Item label="runtime">
        {MovieDetail.runtime}
      </Descriptions.Item>
      <Descriptions.Item label="vote_average" span={2}>
        {MovieDetail.vote_average}
      </Descriptions.Item>
      <Descriptions.Item label="vote_count">
        {MovieDetail.vote_count}
      </Descriptions.Item>
      <Descriptions.Item label="status">{MovieDetail.status}</Descriptions.Item>
      <Descriptions.Item label="popularity">
        {MovieDetail.popularity}
      </Descriptions.Item>
    </Descriptions>
  );
}

export default MovieInfo;
