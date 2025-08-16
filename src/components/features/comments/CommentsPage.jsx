import { useParams } from "react-router-dom";
import Layout from "../../layouts/Layout";
import ArticleDetail from "../articles/ArticleDetail";
import CommentsList from "./CommentsList";

function CommentsPage() {
  const { id } = useParams();
  return (
    <Layout>
      <h2>Article:</h2>
      <ArticleDetail />
      <CommentsList id={id} />
    </Layout>
  );
}

export default CommentsPage;
