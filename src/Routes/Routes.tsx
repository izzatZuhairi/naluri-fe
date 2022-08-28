import { Route, Routes } from "react-router-dom";
import { Home } from "../modules/home";

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};
