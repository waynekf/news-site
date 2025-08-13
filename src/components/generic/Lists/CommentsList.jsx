import { useEffect, useState } from "react";
import fetchComments from "../../../apis/fetchComments";
import CommentCard from "../Cards/CommentCard";

function CommentsList({ id }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchComments(id).then((comments) => {
      setComments(comments);
    });
  }, []);

  return (
    <>
      {comments.map((comment, index) => (
        <CommentCard key={comment?.id} index={index} comment={comment} />
      ))}
    </>
  );
}

export default CommentsList;

/*


  useEffect(() => {
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchArticle(id)
      .then((data) => {
        setArticle(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setNotFound(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  */
