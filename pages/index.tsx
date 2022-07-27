import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { sanityClient } from "../sanity";
import { IPost } from "../typings";
import PostList from "../components/PostList";

interface Props {
  posts: [IPost];
}

const Home = ({ posts }: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      {/* Posts */}
      <PostList posts={posts} />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = `
    *[_type=="post"]{
      _id,
      title,
      author->{
        name, 
        image
      },
      mainImage,
      slug,
      description
      }
  `;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
