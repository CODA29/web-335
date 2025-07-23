/**
	Title: books.js
    Author: Dagmawi Megra
    Date: 22 July 2025
    Description: MongoDB Shell Scripts for the books, customers, and wishlists collections.
 */

// Delete the books, customers, and wishlists collections.
db.books.drop()
db.customers.drop()
db.wishlists.drop()


// Create the books, customers, and wishlists collections using Document Validation.
db.createCollection("books", {
    validator: { $jsonSchema: { 
        bsonType: "object",
        properties: {
            bookId:{
                bsonType: "string"
            },
            title: {
                bsonType: "string"
            },
            genre:{
                bsonType: "string"
            },
            author:{
                bsonType: "string"
            }
        }
    }}
});

db.createCollection("customers", {
    validator: { $jsonSchema: {
        bsonType: "object",
        properties: {
            customerId: {
                bsonType: "string"
            },
            wishlistId:{
                bsonType: "string"
            },
            firstName: {
                bsonType: "string"
            },
            lastName: {
                bsonType: "string"
            },
            email: {
                bsonType: "string"
            }
        }
    }}
});

db.createCollection("wishlists", {
    validator: { $jsonSchema: {
        bsonType: "object",
        properties: {
            wishlistId: {
                bsonType: "string"
            },
            customerId: {
                bsonType: "string"
            },
            wishlistBooks: {
                bsonType: "array",
                items: {
                    bsonType: "object",
                    properties: {
                        bookId: {
                            bsonType: "string"
                        },
                        title: {
                            bsonType: "string"
                        },
                        genre: {
                            bsonType: "string"
                        },  
                    }
                }
            },
            
        }
    }}
}); 

// books
book1 = {
    "bookId": "b1001",
    "title": "The Great Gatsby",
    "genre": "Fiction",
    "author": "F. Scott Fitzgerald"
}
book2 = {
    "bookId": "b1002",
    "title": "To Kill a Mockingbird",
    "genre": "Fiction",
    "author": "Harper Lee"
}
book3 = {
    "bookId": "b1003",
    "title": "1984",
    "genre": "Dystopian",
    "author": "George Orwell"
}
book4 = {
    "bookId": "b1004",
    "title": "Pride and Prejudice",
    "genre": "Romance", 
    "author": "Jane Austen"
}
book5 = {
    "bookId": "b1005",
    "title": "The Catcher in the Rye",
    "genre": "Fiction",
    "author": "J.D. Salinger"
}
book6 = {
    "bookId": "b1006",
    "title": "The Hobbit",
    "genre": "Fantasy",
    "author": "J.R.R. Tolkien"
} 

// Insert the books into the books collection.  
db.books.insertOne(book1);
db.books.insertOne(book2);
db.books.insertOne(book3);
db.books.insertOne(book4);
db.books.insertOne(book5);
db.books.insertOne(book6);


// customers
smith = {
    "customerId": "c1001",
    "wishlistId": "w1001",
    "firstName": "Jamie",
    "lastName": "Smith",
    "email": "jsmith@gmail.com",
}  
johnson = {
    "customerId": "c1002",
    "wishlistId": "w1002",
    "firstName": "Alex",
    "lastName": "Johnson",
    "email": "ajohnson@gmail.com"
}
brown = {
    "customerId": "c1003",
    "wishlistId": "w1003",
    "firstName": "Taylor",
    "lastName": "Brown",
    "email": "tbrown@gmail.com"
}
williams = {
    "customerId": "c1004",
    "wishlistId": "w1004",
    "firstName": "Jordan",
    "lastName": "Williams",
    "email": "jwilliam@gmail.com"
}
jones = {
    "customerId": "c1005",
    "wishlistId": "w1005",
    "firstName": "Morgan",
    "lastName": "Jones",
    "email": "mjones@gmail.com"
}
garcia = {
    "customerId": "c1006",
    "wishlistId": "w1006",
    "firstName": "Casey",
    "lastName": "Garcia",
    "email": "cgarcia@gmail.com"
}   

// Insert the customers into the customers collection.
db.customers.insertOne(smith);
db.customers.insertOne(johnson);
db.customers.insertOne(brown);
db.customers.insertOne(williams);
db.customers.insertOne(jones);
db.customers.insertOne(garcia); 



// wishlists of customers    
smithWishlist = {
    "wishlistId": "w1001",
    "customerId": "c1001",
    "wishlistBooks": [
        {
            "bookId": "b1001",
            "title": "The Great Gatsby",
            "genre": "Fiction"
        },
        {
            "bookId": "b1002",
            "title": "To Kill a Mockingbird",
            "genre": "Fiction"
        }   
    ]
}
johnsonWishlist = {
    "wishlistId": "w1002",
    "customerId": "c1002",
    "wishlistBooks": [
        {
            "bookId": "b1003",
            "title": "1984",
            "genre": "Dystopian"
        },
        {
            "bookId": "b1004",
            "title": "Pride and Prejudice",
            "genre": "Romance"
        }
    ]
}
brownWishlist = {
    "wishlistId": "w1003",
    "customerId": "c1003",
    "wishlistBooks": [
        {
            "bookId": "b1005",
            "title": "The Catcher in the Rye",
            "genre": "Fiction"
        },
        {
            "bookId": "b1006",
            "title": "The Hobbit",
            "genre": "Fantasy"
        }
    ]
}   
williamsWishlist = {
    "wishlistId": "w1004",
    "customerId": "c1004",
    "wishlistBooks": [
        {
            "bookId": "b1001",
            "title": "The Great Gatsby",
            "genre": "Fiction"
        },
        {
            "bookId": "b1003",
            "title": "1984",
            "genre": "Dystopian"
        }
    ]
}
jonesWishlist = {
    "wishlistId": "w1005",
    "customerId": "c1005",
    "wishlistBooks": [
        {
            "bookId": "b1002",
            "title": "To Kill a Mockingbird",
            "genre": "Fiction"
        },
        {
            "bookId": "b1004",
            "title": "Pride and Prejudice",
            "genre": "Romance"
        }
    ]
}
garciaWishlist = {
    "wishlistId": "w1006",
    "customerId": "c1006",
    "wishlistBooks": [
        {
            "bookId": "b1005",
            "title": "The Catcher in the Rye",
            "genre": "Fiction"
        },
        {
            "bookId": "b1006",
            "title": "The Hobbit",
            "genre": "Fantasy"
        }
    ]
}   


// Insert the wishlists into the wishlists collection.
db.wishlists.insertOne(smithWishlist);
db.wishlists.insertOne(johnsonWishlist);
db.wishlists.insertOne(brownWishlist);
db.wishlists.insertOne(williamsWishlist);
db.wishlists.insertOne(jonesWishlist);
db.wishlists.insertOne(garciaWishlist); 
