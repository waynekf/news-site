import Card from "./Card";

function CommentCard({ index, comment }) {
  return (
    <Card className="comment-card">
      Comment made by {comment.author} on {new Date(comment.created_at).toLocaleDateString()}:
      <textarea
        className="comment-text"
        defaultValue={comment.body}
        readOnly
      ></textarea>
    </Card>
  );
}

export default CommentCard;
