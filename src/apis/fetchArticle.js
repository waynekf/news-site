function fetchArticle(id) {
  const url = `https://northcoders-news-be-udwh.onrender.com/api/articles/${id}`;
  return fetch(url)
    .then((res) => {
      if (res.status === 404) {
        return Promise.reject({
          status: res.status,
          msg: "Article not found",
        });
      }
      const json = res.json();

      return json;
    })
    .then((articles) => {
      console.log(articles, "fetch");
      if (articles.length === 0) {
        return Promise.reject({
          status: res.status,
          msg: "Article not found",
        });
      }

      return articles;
    })
    .catch((error) => {
      console.log(error, "error");
    });
}

export default fetchArticle;
