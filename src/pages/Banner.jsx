import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-teal-500 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        
        {/* Left: Text */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl font-bold mb-4">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-lg mb-6">
            Browse, borrow, and read books online instantly. Find your perfect read in just a few clicks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/browse"
              className="btn btn-primary btn-lg"
            >
              Browse Books
            </Link>
            <Link
              to="/register"
              className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-purple-500"
            >
              Join Now
            </Link>
          </div>
        </div>

        
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://picsum.photos/400/400?random=1"
            alt="Books Hero"
            className="rounded-lg shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
