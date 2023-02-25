import React, { useState } from "react";
import "../../styles/SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for products"
        className="search-input"
      />
      <button type="submit" className="search-button" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
