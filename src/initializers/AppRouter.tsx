import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../components/Home";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
