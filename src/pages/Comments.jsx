import { useParams } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import List from "../components/generic/Lists/List";
import CommentsList from "../components/generic/Lists/CommentsList";

function Comments() {
  const { id } = useParams();
  return (
    <Layout>
      <h2>Comments:</h2>
      <List className="comments-list">
        <CommentsList id={id} />
      </List>
    </Layout>
  );
}

export default Comments;
