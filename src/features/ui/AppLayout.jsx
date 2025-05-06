import { Outlet, useNavigation } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state == "loading";
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-scroll">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
