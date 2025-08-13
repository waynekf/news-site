import { Link } from "react-router";
import Card from "./Card";

function ArticleCard({ index, article }) {
  return (
    <Card className="article-card">
      <ul>
        <li>
          <p>Title: {article.title}</p>
        </li>
        <li>Author: {article.author}</li>
        <li>Topic: {article.topic}</li>
        <li>Topic: {article.comment_count}</li>
        <li>Votes: {article.votes}</li>
        <li>
          <img src={article.article_img_url} alt={article.title} />
        </li>
      </ul>
      <Link to={`/articles/${article.article_id}`}>Read article</Link>
      <br />
      <Link to={`/articles/${article.article_id}/comments`}>Read comments</Link>
    </Card>
  );
}

export default ArticleCard;
