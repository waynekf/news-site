import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useParams } from "react-router-dom";
import Detail from "./Detail";
import NotFound from "../Errors/NotFound";
import fetchArticle from "../../../apis/fetchArticle";
import Loading from "../Alerts/Loading";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const url = `/articles`;
  useEffect(() => {
    setIsLoading(true);
    fetchArticle(id)
      .then((data) => {
        setArticle(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setNotFound(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (notFound) {
    return <NotFound></NotFound>;
  } else if (isLoading) {
    return (
      <Detail className="article-detail">
        <Loading />
      </Detail>
    );
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
