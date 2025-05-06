import axios from "axios";

const apiKey = "c5a75b929ed19a05b857f98cc83740e0";

export async function getMovies() {
  try {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieDetails(id) {
  try {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );
    return data;
  } catch (error) {
    throw new Error("failed to loading movie details");
  }
}
