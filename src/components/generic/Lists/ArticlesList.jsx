import { useState } from "react";
import fetchArticles from "../../../apis/fetchArticles";
import ArticleCard from "../Cards/ArticleCard";

const fetchData = fetchArticles();

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  fetchData().then(({ articles }) => {
    setArticles(articles);
  });

  return (
    <>
      {articles.map((article, index) => (
        <ArticleCard
          key={`article-card-${article?.article_id}`}
          index={index}
          article={article}
        />
      ))}
    </>
  );
};

export default ArticlesList;
