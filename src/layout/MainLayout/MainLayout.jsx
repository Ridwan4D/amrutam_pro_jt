import { Outlet } from "react-router";
import Nav from "../../component/Nav/Nav";

const MainLayout = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <div>
        <Nav />
      </div>
      <div>
        <Outlet />
      </div>
      <div>{/* <Footer /> */}</div>
    </div>
  );
};

export default MainLayout;
