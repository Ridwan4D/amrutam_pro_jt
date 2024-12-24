import { Route, Routes } from "react-router";
import Login from "../pages/login/Login";
import MainLayout from "../layout/MainLayout/MainLayout";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import FindDoctor from "../pages/FindDoctor/FindDoctor";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index={true} element={<Home />} />
        <Route path="/findDoctor" element={<FindDoctor />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
