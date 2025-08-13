import { useEffect, useState } from "react";
import fetchComments from "../../../apis/fetchComments";
import CommentCard from "../Cards/CommentCard";
import Detail from "../Detail/Detail";

function CommentsList({ id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchComments(id)
      .then((comments) => {
        setComments(comments);
      })
      .finally((error) => {
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (<Detail className="article-detail">
      <p>Loading...</p>
    </Detail>);
  } else {
    return (
      <>
        {comments.map((comment, index) => (
          <CommentCard
            key={`comment-card-${comment?.comment_id}`}
            index={index}
            comment={comment}
          />
        ))}
      </>
    );
  }
}

export default CommentsList;
