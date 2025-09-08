import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!book) return <p className="text-center mt-10">Book not found!</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-24 md:py-36">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full md:w-1/3 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-gray-600 mb-2">By {book.author}</p>
          <p className="badge badge-outline mb-2">{book.category}</p>
          <p className="font-semibold text-primary mb-4">${book.price} / Rent</p>
          <p>{book.description || "No description available."}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
