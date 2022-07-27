import { IPost } from "../typings";
import Comment from "./Comment";

interface Props {
  post: IPost;
}

const CommentList = ({ post }: Props) => {
  return (
    <div
      className="flex flex-col p-10 max-w-2xl mx-auto shadow-yellow-500 shadow 
  space-y-2"
    >
      <h3 className="text-4xl">Comments</h3>
      <hr className="pb-2" />
      {post.comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
