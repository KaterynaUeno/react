import React, { Component } from "react";
import config from "./config";
import axios from "axios";

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    const mid = this.props.match.params.movieid;
    const singleMovieUrl = `https://api.themoviedb.org/3/movie/${mid}?api_key=${config.api_key}`;
    axios.get(singleMovieUrl).then((response) => {
      // console.log(response.data);
      this.setState({
        movie: response.data,
      });
    });
  }
  render() {
    // console.log(this.props.match.params.movieid);
    if (this.state.movie.titel === undefined) {
      return <h1>Loading...</h1>;
    }
    const movie = this.state.movie;
    const imageUrl = `http://image.tmdb.org/t/p/w300"${movie.poster_path}`;
    return (
      <div>
        <img src={imageUrl} alt="" />
        <p>{movie.title}</p>;
      </div>
    );
  }
}

export default Movie;
