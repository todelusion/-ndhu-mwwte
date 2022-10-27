import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import About from "./pages/about";
import Nav from "./layout/Nav";

export default function Router(): JSX.Element {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<Nav />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
