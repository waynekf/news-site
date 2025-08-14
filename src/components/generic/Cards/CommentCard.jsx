import Card from "./Card";
import deleteComment from "../../../apis/deleteComment";

function CommentCard({ index, comment, handleCommentDelete }) {
  const handleClick = function () {
    deleteComment(comment.comment_id).then((data) => {
      handleCommentDelete(comment.comment_id);
    });
  };
  return (
    <Card className="comment-card">
      Comment made by {comment.author} on{" "}
      {new Date(comment.created_at).toLocaleDateString()}:
      <textarea
        className="comment-text"
        defaultValue={comment.body}
        readOnly
      ></textarea>
      <button onClick={handleClick}>Delete</button>
    </Card>
  );
}

export default CommentCard;
