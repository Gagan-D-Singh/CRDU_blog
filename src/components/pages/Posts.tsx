import { useState } from "react";
import { addPost } from "../../service/api";

const Posts = () => {
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  const handleAddPost = () => {
    // Logic to add a new post will go here
    const postData = async () => {
      const response = await addPost(newPost);
      console.log("Post added:", response.data);
      setNewPost({ title: "", body: "" });
    };
    postData();
  }

  return (
    <main>
      <h1>This will be responsible to add a new Post</h1>
      <form className="post_form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}/>

        <label htmlFor="body">Body:</label>
        <textarea id="body" name="body" value={newPost.body} onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}></textarea>

        <button type="submit" className="add_post_button" onClick={handleAddPost}>Add Post</button>
      </form>
    </main>
  );
};

export default Posts;
