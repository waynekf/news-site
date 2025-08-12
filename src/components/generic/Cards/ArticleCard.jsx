import { Link } from "react-router";
import Card from "../Card";

function ArticleCard({ index, article }) {
  const url = `/articles/${article.article_id}`;
  return (
    <Card>
      <ul>
        <li>
          <p>Title:{article.title}</p>
        </li>
        <li>Author: {article.author}</li>
        <li>Topic: {article.topic}</li>
        <li>Topic: {article.comment_count}</li>
        <li>Votes: {article.votes}</li>
        <li>
          <img src={article.article_img_url} alt={article.title} />
        </li>
      </ul>
      <Link to={url}>Detail...</Link>
    </Card>
  );
}

export default ArticleCard;
