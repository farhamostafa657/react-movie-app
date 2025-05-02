import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./features/ui/Error";
import AppLayout from "./features/ui/AppLayout";
import Home from "./features/ui/Home";
import Movies from "./features/movie-list/Movies";
import Details from "./features/details/Details";
import WatchList from "./features/watch-list/WatchList";

// let router = createBrowserRouter({});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/movies", element: <Movies /> },
      { path: "/details", element: <Details /> },
      { path: "/watch-list", element: <WatchList /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
