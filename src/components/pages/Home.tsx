import { useOutletContext } from "react-router-dom";

interface PostProps {
    filteredPosts: Array<any>;
}

const Home = () => {
    const { filteredPosts } = useOutletContext<PostProps>();
  return (
    <main>
      <h1>Posts for Fiserv Internal Use Only</h1>
      {filteredPosts && filteredPosts.map((posts) => (
        <div key={posts.id} className="post_card">
          <h2>{posts.title}</h2>
          <p>{posts.body}</p>
        </div>
      ))}
    </main>
  );
};

export default Home;
