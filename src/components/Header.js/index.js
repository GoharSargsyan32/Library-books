import React from "react";
import "./style.css"

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="header">
      <h1>Library</h1>
      <p>Books For Students</p>
      <input
        type="text"
        placeholder="Search books..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
    </header>
  );
};

export default Header;
