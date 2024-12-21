import { Route, Routes } from "react-router";
import Login from "../pages/login/Login";
import MainLayout from "../layout/MainLayout/MainLayout";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index={true} element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
