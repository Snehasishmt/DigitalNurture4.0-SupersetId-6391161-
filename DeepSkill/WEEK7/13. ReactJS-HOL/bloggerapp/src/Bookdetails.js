import React from 'react';

function BookDetails({ books }) {
  const bookList = books.map(book => ( 
    <div key={book.id}>
      <h3>{book.bname}</h3>
      <h4>{book.price}</h4>
    </div>
  ));

  return (
    <div>
      <h2>Book Details</h2>
      {bookList}
    </div>
  );
}

export default BookDetails;