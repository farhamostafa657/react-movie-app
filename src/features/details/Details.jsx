import { useLoaderData } from "react-router";
import { getMovieDetails } from "../../services/apiMovie";

function Details() {
  const movie = useLoaderData();
  console.log(movie);
  return <div>details</div>;
}

export async function loader({ params }) {
  const movieDetails = await getMovieDetails(params.movieId);
  return movieDetails;
}

export default Details;
