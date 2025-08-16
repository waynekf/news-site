import Layout from "../../layouts/Layout";
import ArticlesList from "./ArticlesList";
import { useParams } from "react-router-dom";

function ArticlesPage() {
  const { id } = useParams();
  return (
    <Layout>
      <h2>Articles{id ? " about ".concat(id) : ""}:</h2>
      {id ? <ArticlesList topic={id} /> : <ArticlesList />}
    </Layout>
  );
}

export default ArticlesPage;
