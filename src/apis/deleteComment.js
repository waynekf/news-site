function deleteComment(id) {
  const url = `https://northcoders-news-be-udwh.onrender.com/api/comments/${id}`;
  return fetch(url, { method: "DELETE" })
    .then((res) => {
      if (res.status === 404) {
        return Promise.reject({
          status: res.status,
          msg: "Comment not found",
        });
      }

      return res.ok;
    })
    .catch((error) => {
      throw error;
    });
}

export default deleteComment;
