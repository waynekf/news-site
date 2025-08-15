import { useEffect, useState } from "react";
import fetchTopics from "../../../apis/fetchTopics";
import TopicCard from "./TopicCard";
import { useIsLoadingContext } from "../../contexts/IsLoadingContext";

function TopicsList() {
  const [topics, setTopics] = useState([]);
  const { hideLoading, showLoading } = useIsLoadingContext();
  useEffect(() => {
    showLoading();
    fetchTopics()
      .then((topics) => {
        setTopics(topics);
      })
      .finally((error) => {
        hideLoading();
      });
  }, []);

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

export default TopicsList;
