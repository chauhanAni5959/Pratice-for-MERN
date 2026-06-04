import React, { useEffect, useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/quotes?limit=60");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();
        setPosts(result.quotes);
      } catch (error) {
        console.error(`Error: ${error}`);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-50 text-xl font-medium text-slate-600">
        Loading beautiful insights...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-50 text-xl font-medium text-red-600">
        Error loading blog: {error}
      </div>
    );
  }

  // --- PAGINATION MATHEMATICS ---
  const indexOfLastPost = currentPage * postsPerPage; // e.g., page 2 * 10 = index 20
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // e.g., 20 - 10 = index 10
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // Extracts exactly 10 posts
  const totalPages = Math.ceil(posts.length / postsPerPage); // 60 / 10 = 6 total pages

  // Generate an array of page numbers [1, 2, 3, 4, 5, 6]
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Change page handlers
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll back up when page changes
  };

  const nextPage = () => {
    if (currentPage < totalPages) paginate(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) paginate(currentPage - 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      {/* Blog Header Banner */}
      <header className="max-w-4xl mx-auto text-center pt-16 pb-12 px-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
          The Daily Thought
        </h1>
        <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto">
          Showing page {currentPage} of {totalPages} • 10 articles per page
        </p>
        <div className="w-16 h-1 bg-sky-500 mx-auto mt-6 rounded-full" />
      </header>

      {/* Blog Posts Grid (Renders slice of 10) */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <article
              key={post.id}
              className="flex flex-col justify-between bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-400 uppercase mb-4">
                  <span>Article #{indexOfFirstPost + index + 1}</span>
                  <span className="text-slate-300">•</span>
                  <span>2 min read</span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 mb-4 leading-snug hover:text-sky-600 transition-colors cursor-pointer">
                  Finding Meaning in Words
                </h2>

                <p className="text-base text-slate-600 italic leading-relaxed mb-8 relative before:content-['“'] before:text-slate-200 before:text-4xl before:absolute before:-top-4 before:-left-2 pl-4">
                  {post.quote}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 bg-gradient-to-tr from-sky-400 to-blue-500 text-white rounded-full flex items-center justify-center font-bold text-base shadow-sm shrink-0">
                  {post.author.charAt(0).toUpperCase()}
                </div>
                <div className="truncate">
                  <h4 className="text-sm font-semibold text-slate-900 truncate">
                    {post.author}
                  </h4>
                  <p className="text-xs text-slate-500">
                    Contributing Philosopher
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* --- PAGINATION CONTROLS BAR --- */}
      <nav
        className="flex justify-center items-center gap-2 pb-24 px-4"
        aria-label="Pagination Navigation"
      >
        {/* Previous Button */}
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg font-medium text-sm border transition-colors ${
            currentPage === 1
              ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
              : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 active:bg-slate-100"
          }`}
        >
          Previous
        </button>

        {/* Dynamic Page Numbers */}
        <div className="hidden sm:flex gap-1">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                currentPage === number
                  ? "bg-sky-500 text-white shadow-sm shadow-sky-200"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {number}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg font-medium text-sm border transition-colors ${
            currentPage === totalPages
              ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
              : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 active:bg-slate-100"
          }`}
        >
          Next
        </button>
      </nav>

      {/* Blog Footer */}
      <footer className="text-center py-8 border-t border-slate-200 bg-white text-sm text-slate-400">
        <p>© 2026 The Daily Thought. Powered by React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;
