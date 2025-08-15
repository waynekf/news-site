import wait from "../utils/wait";

export function fetchTopics() {
  const url = `https://northcoders-news-be-udwh.onrender.com/api/topics`;
  return fetch(url)
    .then((res) => {
      wait(750);
      if (res.status === 404) {
        return Promise.reject({
          status: res.status,
          msg: "No topics found",
        });
      }
      const json = res.json();

      return json;
    })
    .then(({ topics }) => {
      if (topics.length === 0) {
        return Promise.reject({
          status: res.status,
          msg: "No topics found",
        });
      }

      return topics;
    })
    .catch((error) => {
      throw error;
    });
}

export default fetchTopics;
