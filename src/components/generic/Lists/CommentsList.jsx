import { useEffect, useState } from "react";
import fetchComments from "../../../apis/fetchComments";
import CommentCard from "../Cards/CommentCard";
import Detail from "../Detail/Detail";
import Loading from "../Alerts/Loading";

function CommentsList({ id }) {
  const handleCommentDelete = function (id) {
    setCommentsDeleted([...commentsDeleted, id]);
  }
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [commentsDeleted, setCommentsDeleted] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetchComments(id)
      .then((comments) => {
        setComments(comments);
      })
      .finally((error) => {
        setIsLoading(false);
      });
  }, [commentsDeleted]);
  if (isLoading) {
    return (
      <Detail className="article-detail">
        <Loading />
      </Detail>
    );
  } else {
    return (
      <>
        {comments.map((comment, index) => (
          <CommentCard
            key={`comment-card-${comment?.comment_id}`}
            index={index}
            comment={comment}
            handleCommentDelete = {handleCommentDelete}
          />
        ))}
      </>
    );
  }
}

export default CommentsList;
