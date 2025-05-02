import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />

      <div className="overflow-scroll">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
