// 1. FIXED: Added useEffect to the import line
import React, { useMemo, useState, useEffect } from "react";

const SearchBar = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchterm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // For fetching API
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal,
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data!");
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    loadData();
    return () => controller.abort();
  }, []);

  
  const filterItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [items, searchTerm]);

  if (loading) {
    return <p>Loading ....</p>;
  }
  if (error) {
    return <p>System Error: {error}</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search Items.."
        value={searchTerm}
        onChange={(e) => setSearchterm(e.target.value)}
        style={{ padding: "8px", marginBottom: "15px", width: "300px" }}
      />

      <ul>
        
        {filterItems.map((item) => (
          <li key={item.id} style={{ margin: "8px 0" }}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
