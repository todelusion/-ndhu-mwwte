import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import Blog from "./pages/blog";
import Nav from "./layout/Nav";

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route element={<Nav />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Route>
    </Routes>
  );
}
