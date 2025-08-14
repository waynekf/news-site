import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Comments from "./pages/Comments";
import Topics from "./pages/Topics";
import NotFound from "./components/generic/Errors/NotFound";

import "./css/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Article />} />
      <Route path="/articles/:id/comments" element={<Comments />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/topics/:id" element={<Topics />} />
      <Route path="/topics/:id/articles/" element={<Articles />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
