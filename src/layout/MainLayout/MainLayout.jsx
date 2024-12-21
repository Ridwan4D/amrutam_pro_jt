import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <div>{/* <Nav /> */}</div>
      <div>
        <Outlet />
      </div>
      <div>{/* <Footer /> */}</div>
    </div>
  );
};

export default MainLayout;
