import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useParams } from "react-router-dom";
import Detail from "../Detail";
import fetchArticle from "../../../apis/fetchArticle";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const url = `/articles`;
  useEffect(() => {
    setIsLoading(true);
    fetchArticle(id).then((data) => {
      setArticle(data);
    })
    .catch((error) =>{
      setIsLoading(false);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }, []);

if (isLoading) {
  return (
    <Detail>
      <p>Loading...</p>
    </Detail>
  );
} else {

  return (
    <Detail>
      <ul>
        <li>
          <p>
            <u>{article.title}</u> by <b>{article.author}    {isLoading ? "true" : "false" }  </b>:
          </p>
        </li>
        <li>
          <p>Created: {new Date(article.created_at).toLocaleDateString()}</p>
        </li>
        <li>
          <p>Topic: {article.topic}</p>
        </li>
        <li>
          <textarea className="article-text" defaultValue={article.body} readOnly>
          </textarea>
        </li>
        <li>
          <p>Votes: {article.votes}</p>
        </li>
      </ul>
      <Link to={url}>Back to list...</Link>
    </Detail>
  );
}
};

export default ArticleDetail;
