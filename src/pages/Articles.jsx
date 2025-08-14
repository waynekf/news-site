import { Suspense } from "react";
import Spinner from "react-loading-indicators";
import List from "../components/generic/Lists/List";
import Layout from "../components/layouts/Layout";
import ArticlesList from "../components/generic/Lists/ArticlesList";
import { useParams } from "react-router-dom";

function Articles(topic) {
  const { id } = useParams();

  const list = id ? <ArticlesList topic={id} /> : <ArticlesList />;

  return (
    <Layout>
      <h2>Articles{id ? " about ".concat(id): ""}:</h2>
      <Suspense
        fallback={
          <List className="articles-list">
            <Spinner className="spinner" style={{ fontSize: "8px" }} />
          </List>
        }
      >
        <List className="articles-list">{list}</List>
      </Suspense>
    </Layout>
  );
}

export default Articles;
