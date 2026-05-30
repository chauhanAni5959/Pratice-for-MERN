import React from "react";

const searchBar = () => {
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes/search?q=");
    const json = await data.json();
  };
  return (
    <div className="App">
    
        <h1>Auto Complete Search Bar</h1>
        <input type="text" className="search-input" placeholder="Search...." />
      </div>
    
  );
};

export default searchBar;
