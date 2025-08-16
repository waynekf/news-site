import wait from "../utils/wait";

function fetchArticles() {
  const url = `https://northcoders-news-be-udwh.onrender.com/api/articles`;
  return fetch(url)
    .then((res) => {
      wait(750);
      if (res.status === 404) {
        return Promise.reject({
          status: res.status,
          msg: "No articles found",
        });
      }
      const json = res.json();

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
    .catch((error) => {});
}

export default fetchArticles;
