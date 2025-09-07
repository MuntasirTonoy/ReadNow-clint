import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import BookCard from "../components/BookCard";

const Browse = () => {
  // Dummy book data
  const allBooks = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Novel", price: 5, cover: "https://picsum.photos/200/300?1" },
    { id: 2, title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", price: 7, cover: "https://picsum.photos/200/300?2" },
    { id: 3, title: "Sapiens", author: "Yuval Noah Harari", category: "History", price: 6, cover: "https://picsum.photos/200/300?3" },
    { id: 4, title: "Clean Code", author: "Robert C. Martin", category: "Technology", price: 10, cover: "https://picsum.photos/200/300?4" },
    { id: 5, title: "1984", author: "George Orwell", category: "Novel", price: 4, cover: "https://picsum.photos/200/300?5" },
    { id: 6, title: "The Selfish Gene", author: "Richard Dawkins", category: "Science", price: 8, cover: "https://picsum.photos/200/300?6" },
  ];

  // Filters
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // Filter + Search
  const filteredBooks = allBooks.filter((book) => {
    return (
      (category === "all" || book.category === category) &&
      (search === "" || book.title.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Browse Books</h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        {/* Search */}
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

        {/* Category Filter */}
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
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
