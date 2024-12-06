import { useState } from "react";
import { Button } from "../";

function CommentBox() {
  const [comment, setComment] = useState({ comment: "" });
  return (
    <div>
      <textarea
        className="bg-white text-black"
        onChange={(e) => setComment({ [e.target.name]: e.target.value })}
        name="comment"
        value={comment.comment}
      />
      <Button onClick={() => console.log(comment)}>Post</Button>
    </div>
  );
}

export default CommentBox;
