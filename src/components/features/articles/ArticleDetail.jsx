import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useParams } from "react-router-dom";
import Detail from "../../layouts/Detail";
import NotFound from "../errors/NotFound";
import fetchArticle from "../../../apis/fetchArticle";
import { useIsLoadingContext } from "../../contexts/IsLoadingContext";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const { hideLoading, showLoading } = useIsLoadingContext();
  const [notFound, setNotFound] = useState(false);
  const url = `/articles`;
  useEffect(() => {
    showLoading();
    fetchArticle(id)
      .then((data) => {
        setArticle(data);
      })
      .catch((error) => {
        hideLoading();
        setNotFound(true);
      })
      .finally(() => {
        hideLoading();
      });
  }, []);

  if (notFound) {
    return <NotFound></NotFound>;
  } else {
    return (
      <Detail className="article-detail">
        <ul>
          <li>
            <p>
              <u>{article.title}</u> by <b>{article.author}</b>:
            </p>
          </li>
          <li>
            <p>Created: {new Date(article.created_at).toLocaleDateString()}</p>
          </li>
          <li>
            <p>Topic: {article.topic}</p>
          </li>
          <li>
            <textarea
              className="article-text"
              defaultValue={article.body}
              readOnly
            ></textarea>
          </li>
          <li>
            <p>Votes: {article.votes}</p>
          </li>
        </ul>
        <Link to={url}>Back to list of articles</Link>
      </Detail>
    );
  }
};

export default ArticleDetail;
