import Layout from "../../layouts/Layout";
import List from "../../layouts/List";
import TopicsList from "./TopicsList";

function TopicsPage() {
  return (
    <Layout>
      <h2>Topics:</h2>
      <List className="topics-list">
        <TopicsList />
      </List>
    </Layout>
  );
}

export default TopicsPage;
