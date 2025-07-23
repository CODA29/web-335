/*
	Title: megra-whatABook-queries.js
    Author: Dagmawi Megra
    Date: 22 July 2025
    Description: MongoDB Shell queries for the books collection.
 */

// A query to display a list of books
db.books.find();

// A query to display a list of books by genre
db.books.find({genre: 'Fiction'});

// A query to display a list of books by author
db.books.find({author: 'Harper Lee'});

// A query to display a book by bookId
db.books.findOne({bookId: 'b1004'});