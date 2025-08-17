import { Routes, Route } from "react-router-dom";
import { preconnect } from "react-dom";
import HomePage from "./components/features/home/HomePage";
import AboutPage from "./components/features/about/AboutPage";
import ArticlesPage from "./components/features/articles/ArticlesPage";
import ArticlePage from "./components/features/articles/ArticlePage";
import CommentsPage from "./components/features/comments/CommentsPage";
import Topics from "./components/features/topics/TopicsPage";
import NotFound from "./components/features/errors/NotFound";

import "./css/LessIsMore.css";

function App() {
  const url = `https://northcoders-news-be-udwh.onrender.com/api/articles`;
  preconnect(url);

  return (
    <>
      <div id="loading-container"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/articles/:id/comments" element={<CommentsPage />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:id" element={<Topics />} />
        <Route path="/topics/:id/articles/" element={<ArticlesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
