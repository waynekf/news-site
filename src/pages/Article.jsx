import { Suspense } from "react";
import Spinner from "react-loading-indicators";
import Layout from "../components/layouts/Layout";
import Detail from "../components/generic/Detail/Detail";
import ArticleDetail from "../components/generic/Detail/ArticleDetail";

function Article() {
  return (
    <Layout>
      <h2>Article:</h2>
      <ArticleDetail />
    </Layout>
  );
}

export default Article;
