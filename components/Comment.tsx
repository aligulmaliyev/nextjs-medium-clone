import { Comment } from "../typings";

interface Props {
  comment: Comment;
}

const Comment = ({ comment }: Props) => {
  return (
    <>
      <p>
        <span className="text-yellow-500">{comment.name}:</span>
      </p>
      {comment.comment}
    </>
  );
};

export default Comment;
