import { useEffect, useState } from "react";
import fetchTopics from "../../../apis/fetchTopics";
import TopicCard from "../Cards/TopicCard";
import Detail from "../Detail/Detail";
import Loading from "../Alerts/Loading";

function TopicsList({ id }) {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchTopics()
      .then((topics) => {
        console.log(topics);
        console.log(topics.length);
        setTopics(topics);
      })
      .finally((error) => {
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <Detail className="topic-detail">
        <Loading />
      </Detail>
    );
  } else {
    return (
      <>
        {topics.map((topic, index) => (
          <TopicCard
            key={`topic-card-${topic?.slug}`}
            index={index}
            topic={topic}
          />
        ))}
      </>
    );
  }
}

export default TopicsList;
