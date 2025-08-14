import { useState } from "react";
import fetchArticles from "../../../apis/fetchArticles";
import ArticleCard from "./ArticleCard";

const fetchData = fetchArticles();

const ArticlesList = ({ topic }) => {
  const [articles, setArticles] = useState([]);
  fetchData().then(({ articles }) => {
    setArticles(articles);
  });

  if (topic) {
    return (
      <>
        {articles
          .filter((article) => article.topic === topic)
          .map((article, index) => (
            <ArticleCard
              key={`article-card-${article?.article_id}`}
              index={index}
              article={article}
            />
          ))}
      </>
    );
  } else {
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
  }
};

export default ArticlesList;
