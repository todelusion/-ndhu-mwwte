import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import Blog from "./pages/blog";
import Post from "./pages/post";
import Nav from "./layout/Nav";
import { PostProvider } from "./context/PostContext";

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route element={<Nav />}>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/blog/:type"
          element={
            <PostProvider>
              <Blog />
            </PostProvider>
          }
        />
        <Route
          path="/blog/:type/:postID"
          element={
            <PostProvider>
              <Post />
            </PostProvider>
          }
        />
      </Route>
    </Routes>
  );
}
