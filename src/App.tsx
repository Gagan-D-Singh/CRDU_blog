import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const [posts, setPosts] = useState();
  const [searchPost, setSearchPost] = useState([]);
  return (
    <>
      <div className="App">
        <Header />
        <Navbar />
        {/* <Search searchPost={searchPost} setSearchPost={setSearchPost} /> */}
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
