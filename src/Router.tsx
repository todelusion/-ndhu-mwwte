import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
