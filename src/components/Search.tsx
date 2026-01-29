interface searchProps {
    searchPost: string;
    setSearchPost: (value: string) => void;
}
const Search = ({ searchPost, setSearchPost } : searchProps) => {
  return (
    <>
      <form className="search_form" onSubmit={(e) => e.preventDefault()}>
        {/* <label htmlFor="Search">Search</label> */}
        <input
          className="search_input"
          type="text"
          placeholder="Search Posts"
          value={searchPost}
          onChange={(e) => setSearchPost(e.target.value)}
        />
      </form>
    </>
  );
};

export default Search;
