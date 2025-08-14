import { Link } from "react-router";
import Card from "./Card";

function TopicCard({ index, topic }) {
  return (
    <Card className="topic-card">
      <ul>
        <li>{index}</li>
        <li>Title: {topic.slug}</li>
        <li>Description: {topic.description}</li>
        <li>
          <Link to={`/topics/${topic.slug}/articles`}>Articles</Link>
        </li>
      </ul>
    </Card>
  );
}

export default TopicCard;
