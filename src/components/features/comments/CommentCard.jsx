import Card from "../../layouts/Card";
import deleteComment from "../../../apis/deleteComment";
import { useProfileContext } from "../../contexts/ProfileContext";

function CommentCard({ index, comment, handleCommentDelete }) {
  const handleClick = function () {
    deleteComment(comment.comment_id).then((data) => {
      handleCommentDelete(comment.comment_id);
    });
  };

  const { user } = useProfileContext();

  return (
    <Card className="comment-card">
      Comment made by {comment.author} on{" "}
      {new Date(comment.created_at).toLocaleDateString()}:
      <textarea
        className="comment-text"
        defaultValue={comment.body}
        readOnly
      ></textarea>
      <button disabled={user.name !== comment.author} onClick={handleClick}>
        Delete
      </button>
    </Card>
  );
}

export default CommentCard;
