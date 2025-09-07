import React from "react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition rounded-lg">
      <figure>
        <img src={book.cover} alt={book.title} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>
        <p className="text-sm text-gray-600">By {book.author}</p>
        <p className="text-sm badge badge-outline">{book.category}</p>
        <p className="font-semibold text-primary mt-2">${book.price} / Rent</p>
        <div className="card-actions justify-end">
          <Link to={`/book/${book.id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
