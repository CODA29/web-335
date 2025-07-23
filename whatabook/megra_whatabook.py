"""
Title: megra_whatabook.py
Author: Dagmawi Megra
Date: 22 July 2025
Description: Python program that connects to a mongoFB database and retrieves whatABook's book data.
"""

# Import the MongoClient
from pymongo import MongoClient 



# 1. Connect to your MongoDB database.
client = MongoClient("mongodb+srv://web335_admin:dagweb335@bellevueuniversity.ujybkls.mongodb.net/?retryWrites=true&w=majority&appName=BellevueUniversity")
# Configure a variable to access the web335DB
db = client['web335DB']



# 2. Display a list of books. Format the output so it is easy to read.
# Simulating the printing of all books' titles and authors
print("\n\n-----Printing a list of all books - displaying only their titles, genres, and authors-----")
# Display all documents in the books collection
# and only show the title, author, and genre fields
for book in db.books.find({}, {"_id": 0, "title": 1, "author": 1, "genre": 1}):
    print(book) 



# 3. Display a list of books by Genre.
# Simulating the printing of a book by genre
print("\n\n-----Printing a book by genre-----")

#Display a list of books by Genre. For this requirement, supply the user with a list of genre
#choices and display the appropriate books based on their selection.

genre_choice = input("Choose from these genres - [ A. Fiction,  B. Fantasy,  C. Dystopian,  D. Romance ] ")

# switching the user input to lowercase for case-insensitive comparison
genre_choice = genre_choice.lower()

# Mapping user input to genre
genre_map = {
    'a': 'Fiction',
    'b': 'Fantasy',
    'c': 'Dystopian',
    'd': 'Romance'
}   

# Check if the input is valid
if genre_choice in genre_map:
    genre_choice = genre_map[genre_choice]
else:
    print("Invalid choice. Please select a valid genre.")
    exit()  

# Display books in the selected genre
print(f"\n\n Books in the genre '{genre_choice}':")
for book in db.books.find({"genre": genre_choice}, {"_id": 0, "title": 1, "author": 1}):
    print(book)



# 4.Display a customers wishlist by customerId.
# Simulating the printing of a customer's wishlist by customerId
print("\n\n-----Printing a customer's wishlist by customerId-----")
customer_id = input("Enter a customerId from [ c1001, c1002, c1003, c1004, c1005, or c1006 ]: ")    

# Validate the customerId
valid_customer_ids = ['c1001', 'c1002', 'c1003', 'c1004', 'c1005', 'c1006']
if customer_id not in valid_customer_ids:
    print("\n\nInvalid customerId!")
else:
    # Retrieve a wishlist for the specified customerId
    wishlist = db.wishlists.find_one({"customerId": customer_id}, {"_id": 0, "wishlistId": 1, "wishlistBooks": 1})
    
    # Display the wishlist for the specified customerId
    print(f"\n\nWishlist for customerId {customer_id}:")
    print(wishlist)
