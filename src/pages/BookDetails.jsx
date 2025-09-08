// src/pages/BookDetails.jsx
import React from "react";
import { useParams } from "react-router";

const dummyBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Novel", price: 5, cover: "https://picsum.photos/200/300?1", description: "A classic novel set in the 1920s..." },
  { id: 2, title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", price: 7, cover: "https://picsum.photos/200/300?2", description: "A famous science book about the universe..." },
  { id: 3, title: "Sapiens", author: "Yuval Noah Harari", category: "History", price: 6, cover: "https://picsum.photos/200/300?3", description: "A book about the history of humankind..." },
  { id: 4, title: "Clean Code", author: "Robert B. Martin", category: "Technology", price: 10, cover: "https://picsum.photos/200/300?4", description: "A book about writing clean and maintainable code..." },
  { id: 5, title: "1984", author: "George Orwell", category: "Novel", price: 4, cover: "https://picsum.photos/200/300?5", description: "A dystopian novel about a totalitarian regime..." },
  { id: 6, title: "The Selfish Gene", author: "Richard Dawkins", category: "Science", price: 8, cover: "https://picsum.photos/200/300?6", description: "A book explaining evolution and genetics..." },
];

const BookDetails = () => {
  const { id } = useParams();
  const book = dummyBooks.find((b) => b.id === parseInt(id));

  if (!book) {
    return <p className="text-center mt-10">Book not found!</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={book.cover} alt={book.title} className="w-full md:w-1/3 object-cover rounded-lg" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-gray-600 mb-2">By {book.author}</p>
          <p className="badge badge-outline mb-2">{book.category}</p>
          <p className="font-semibold text-primary mb-4">${book.price} / Rent</p>
          <p>{book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
