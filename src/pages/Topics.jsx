import Layout from "../components/layouts/Layout";
import List from "../components/generic/Lists/List";
import TopicsList from "../components/generic/Lists/TopicsList";

function Topics() {
  return (
    <Layout>
      <h2>Topics:</h2>
      <List className="topics-list">
        <TopicsList />
      </List>
    </Layout>
  );
}

export default Topics;
