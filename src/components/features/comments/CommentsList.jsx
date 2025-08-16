import { useEffect, useState } from "react";
import fetchComments from "../../../apis/fetchComments";
import CommentCard from "./CommentCard";
import { useIsLoadingContext } from "../../contexts/IsLoadingContext";
import List from "../../layouts/List";

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
    <List className="comments-list">
      {comments.map((comment, index) => (
        <CommentCard
          key={`comment-card-${comment?.comment_id}`}
          index={index}
          comment={comment}
          handleCommentDelete={handleCommentDelete}
        />
      ))}
    </List>
  );
}

export default CommentsList;
