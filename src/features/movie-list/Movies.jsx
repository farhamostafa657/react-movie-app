import { useLoaderData } from "react-router";
import { getMovies } from "../../services/apiMovie";

function Movies() {
  const movies = useLoaderData();
  console.log(movies);
  return <div>movies</div>;
}

export async function loader() {
  let movies = await getMovies();
  return movies;
}
export default Movies;
