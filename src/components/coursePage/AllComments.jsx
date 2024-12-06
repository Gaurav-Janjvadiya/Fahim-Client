function AllComments({ courseId }) {
  const comments = [];
  return (
    <div>
      {comments.map((comment) => (
        <p key={comment._id}>{comment.comment}</p>
      ))}
    </div>
  );
}

export default AllComments;
