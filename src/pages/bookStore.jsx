import React, { useEffect } from 'react';
import { BookData } from '../context/bookContext.jsx'; // Adjust the path as necessary
import BookCard from '../components/bookcard.jsx'; // Adjust the path as necessary

const BookStore = () => {
  const { books, fetchBooks } = BookData();

  useEffect(() => {
    fetchBooks(); // Fetch books when component mounts
  }, [fetchBooks]);

  return (
    <div className="container mx-auto p-4 py-28">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-yellow-200">संस्‍कृत पुस्तकालय</h1>
        <p className="text-lg font-medium text-gray-600">
          Dive into the world of ancient wisdom with our collection of Sanskrit texts. Explore, learn, and enrich your knowledge with these invaluable resources.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.length === 0 ? (
          <p className="col-span-full text-center text-gray-600">No books available</p>
        ) : (
          books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))
        )}
      </div>
    </div>
  );
};

export default BookStore;
