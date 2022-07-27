import { IComment } from "../typings";

interface Props {
  comment: IComment;
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
