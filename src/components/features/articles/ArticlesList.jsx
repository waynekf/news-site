import { useEffect, useState } from "react";
import fetchArticles from "../../../apis/fetchArticles";
import List from "../../layouts/List";
import ArticleCard from "./ArticleCard";
import { useIsLoadingContext } from "../../contexts/IsLoadingContext";
import customSorter from "../../../utils/customSorter";

const ArticlesList = ({ topic }) => {
  const { hideLoading, showLoading } = useIsLoadingContext();
  const [sortInfo, setSortInfo] = useState({
    field: "comment_count",
    direction: "DESC",
  });
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    showLoading();
    fetchArticles()
      .then((articles) => {
        setArticles([...articles].sort(customSorter(sortInfo)));
      })
      .finally(() => {
        hideLoading();
      });
  }, [sortInfo.field, sortInfo.direction]);

  const Sorter = function () {
    return (
      <>
        <select
          value={sortInfo.field}
          onChange={(e) => setSortInfo({ ...sortInfo, field: e.target.value })}
        >
          <option value="votes">Votes</option>
          <option value="created_at">Date</option>
          <option value="comment_count">Number of comments</option>
        </select>

        <select
          value={sortInfo.direction}
          onChange={(e) => setSortInfo({ ...sortInfo, direction: e.target.value })}
        >
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </>
    );
  };

  return (
    <>
      <Sorter />
      <List className="articles-list">
        {articles
          .filter((article) => (topic ? article.topic === topic : true))
          .map((article, index) => (
            <ArticleCard
              key={`article-card-${article?.article_id}`}
              index={index}
              article={article}
            />
          ))}
      </List>
    </>
  );
};

export default ArticlesList;
