import { Suspense } from "react";
import Spinner from "react-loading-indicators";
import List from "../components/generic/List";
import Layout from "../components/layouts/Layout";
import ArticlesList from "../components/generic/Lists/ArticlesList";

function Articles() {
  return (
    <Layout>
      <h2>Articles:</h2>
      <Suspense
        fallback={
          <List>
            <Spinner className="spinner" style={{ fontSize: "8px" }} />
          </List>
        }
      >
        <List>
          <ArticlesList />
        </List>
      </Suspense>
    </Layout>
  );
}

export default Articles;
