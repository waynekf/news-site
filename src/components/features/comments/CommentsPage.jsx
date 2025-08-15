import { useParams } from "react-router-dom";
import Layout from "../../layouts/Layout";
import List from "../../layouts/List";
import ArticleDetail from "../articles/ArticleDetail";
import CommentsList from "./CommentsList";

function CommentsPage() {
  const { id } = useParams();
  return (
    <Layout>
      <h2>Article:</h2>
      <ArticleDetail />
      <List className="comments-list">
        <CommentsList id={id} />
      </List>
    </Layout>
  );
}

export default CommentsPage;
