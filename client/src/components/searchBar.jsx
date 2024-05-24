import React, { useState } from "react";
import searchimg from "../img/search.svg";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    if (e.type === 'click' || e.key === 'Enter') {
      onSearch(term);
    }
  };

  return (
    <div className="search-bar">
      <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} onKeyPress={handleSubmit}/>
      <img className="searchimg" src={searchimg} alt="Описание изображения" onClick={handleSubmit} />
    </div>
  );
};

export default SearchBar;
