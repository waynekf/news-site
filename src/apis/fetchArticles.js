import wait from "../utils/wait";

let status = "pending";
let result;

function fetchArticles() {
  const url = `https://northcoders-news-be-udwh.onrender.com/api/articles`;
  let fetching = fetch(url)
    .then((res) => {
      wait(750);
      if (res.status === 404) {
        return Promise.reject({
          status: res.status,
          msg: "No articles found",
        });
      }
      const json = res.json();
      status = "fulfilled";
      result = json;

      return json;
    })
    .then((articles) => {
      if (articles.length === 0) {
        return Promise.reject({
          status: res.status,
          msg: "No articles found",
        });
      }

      return articles.articles;
    })
    .catch((error) => {
      status = "rejected";
      result = error;
    });

  return () => {
    if (status === "pending") {
      throw fetching;
    } else if (status === "rejected") {
      throw result;
    } else if (status === "fulfilled") {
      return result;
    }
  };
}

export default fetchArticles;
