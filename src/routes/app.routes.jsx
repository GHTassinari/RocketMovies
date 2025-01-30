import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { New } from "../pages/New";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Details/:id" element={<Details />} />
      <Route path="/New" element={<New />} />
    </Routes>
  );
}
