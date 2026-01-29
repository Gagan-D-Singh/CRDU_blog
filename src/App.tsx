import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import { Link, Outlet } from "react-router-dom";
import { getPosts } from "./service/api";
import "./App.css";
import useAuth from "./hooks/useAuth";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchPost, setSearchPost] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const {auth, setAuth} = useAuth();

  useEffect(() => {
    // Fetch posts or perform other side effects here
    const fetchPosts = async () => {
      const response = await getPosts();
      setPosts(response.data);
    }
    fetchPosts();
  }, []);

  useEffect(() => {
    setFilteredPosts(posts.filter((post: any) => post.title.toLowerCase().includes(searchPost.toLowerCase())));
  }, [searchPost, posts]);

  console.log(auth);
  return (
    <>
      <div className="app">
        <div className="app_header">
          <Header />
          <div className="nav_search">
            <Search searchPost={searchPost} setSearchPost={setSearchPost} />
            <Navbar />
            <Link className="logout_link" to="/login" onClick={() => setAuth(false)}><li>Logout</li></Link>
          </div>
        </div>
        <main className="content">
        <Outlet context={{ filteredPosts }} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
