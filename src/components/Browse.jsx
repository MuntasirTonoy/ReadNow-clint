import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import BookCard from "../components/BookCard";

const Browse = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // Backend data fetch
  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  const filteredBooks = allBooks.filter((book) => {
    return (
      (category === "all" || book.category === category) &&
      (search === "" || book.title.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 md:py-36">
      <h1 className="text-3xl font-bold mb-6 text-center">Browse Books</h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div className="form-control w-full md:w-1/2">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search by title..."
              className="input input-bordered w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-square">
              <FaSearch />
            </button>
          </div>
        </div>

        <select
          className="select select-bordered w-full md:w-1/4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="Novel">Novel</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="Technology">Technology</option>
        </select>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
