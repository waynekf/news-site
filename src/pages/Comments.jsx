import { useContext } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import List from "../components/generic/Lists/List";
import ArticleDetail from "../components/generic/Detail/ArticleDetail";
import CommentsList from "../components/generic/Lists/CommentsList";
import { IsLoadingContext } from "../components/contexts/IsLoadingContext";

function Comments() {
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

export default Comments;
