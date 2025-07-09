"""
Title: megra_usersp2.py
Author: Dagmawi Megra
Date: 09 July 2025
Description: A Python program that connects to MongoDB
            database and performs various CRUD operations
"""

# Import the MongoClient
from pymongo import MongoClient
import datetime


# Build a connection string to connect to 
client = MongoClient("mongodb+srv://web335_admin:dagweb335@bellevueuniversity.ujybkls.mongodb.net/?retryWrites=true&w=majority&appName=BellevueUniversity")

# Configure a variable to access the web335DB
db = client['web335DB']

# 3. Write the Python code to create a new user document and add it to the users collection
dangote = {
    "firstName": "Aliko",
    "lastName": "Dangote",
    "employeeId": "1014",
    "email": "adangote@me.com",
    "dateCreated": datetime.datetime.now(),
}

# Insert the new user document into the users collection
dangote_user_id = db.users.insert_one(dangote).inserted_id
print(dangote_user_id)

# 4. Write the Python code to prove the document was created

# Simulating the printing of the newly created user
print("\n\n-----Printing the newly created user-----")

# Display the newly created user document
print(db.users.find_one({"employeeId": "1014"}))


# 5. Write the Python code to update the email address of the document you created in step 3
db.users.update_one(
    {"employeeId": "1014"},
    {
        "$set": {
            "email": "aliko.dangote@me.com"
        }
    }
)

# 6. Write the Python code to prove the document was updated
print("\n\n-----Printing the updated user with new email address-----")

# Display the updated user document
print(db.users.find_one({"employeeId": "1014"}))

# 7. Write the Python code to delete the document that was created in step 3.
result = db.users.delete_one({"employeeId": "1014"})


# Simulating the deletion of the user document
print("\n\n-----Deleting the user-----")

print(result)

# 8. Write the Python code to prove the document was deleted.
print("\n\n-----Proving the user was deleted-----")

# Attempt to find the deleted user document
print(db.users.find_one({"employeeId": "1014"}))