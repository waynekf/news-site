import { Suspense } from "react";
import Spinner from "react-loading-indicators";
import Layout from "../components/layouts/Layout";
import Detail from "../components/generic/Detail";
import ArticleDetail from "../components/generic/Detail/ArticleDetail";

function Article() {
  return (
    <Layout>
      <Suspense
        fallback={
          <Detail>
            <Spinner className="spinner" style={{ fontSize: "8px" }} />
          </Detail>
        }>
        <ArticleDetail />
      </Suspense>
    </Layout>
  );
}

export default Article;
