import React from "react";
import { IPost } from "../typings";
import Post from "./Post";

interface Props {
  posts: [IPost];
}
const PostList = ({ posts }: Props) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
   gap-3 md:gap-6 p-2 md:6-2"
    >
      {posts.map((post) => (
        <Post key={post._id} post={post}/>
      ))}
    </div>
  );
};

export default PostList;
