import wait from "../utils/wait";

function fetchComments(articleId) {
  const url = `https://northcoders-news-be-udwh.onrender.com/api/articles/${articleId}/comments`;
  return fetch(url)
    .then((res) => {
      wait(750);
      if (res.status === 404) {
        return Promise.reject({
          status: res.status,
          msg: "No comments found",
        });
      }
      const json = res.json();

      return json;
    })
    .then(({ comments }) => {
      if (comments.length === 0) {
        return Promise.reject({
          status: res.status,
          msg: "No comments found",
        });
      }

      return comments;
    })
    .catch((error) => {
      throw error;
    });
}

export default fetchComments;
