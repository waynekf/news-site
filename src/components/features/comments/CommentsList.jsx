import { useEffect, useState } from "react";
import fetchComments from "../../../apis/fetchComments";
import CommentCard from "./CommentCard";
import { useIsLoadingContext } from "../../contexts/IsLoadingContext";

function CommentsList({ id }) {
  const handleCommentDelete = function (id) {
    setCommentsDeleted([...commentsDeleted, id]);
  };
  const [comments, setComments] = useState([]);
  const { hideLoading, showLoading } = useIsLoadingContext();
  const [commentsDeleted, setCommentsDeleted] = useState([]);
  useEffect(() => {
    showLoading();
    fetchComments(id)
      .then((comments) => {
        setComments(comments);
      })
      .finally((error) => {
        hideLoading();
      });
  }, [commentsDeleted]);

  return (
    <>
      {comments.map((comment, index) => (
        <CommentCard
          key={`comment-card-${comment?.comment_id}`}
          index={index}
          comment={comment}
          handleCommentDelete={handleCommentDelete}
        />
      ))}
    </>
  );
}

export default CommentsList;
