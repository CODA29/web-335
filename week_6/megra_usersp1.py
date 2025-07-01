"""
Title: megra_usersp1.py
Author: Dagmawi Megra
Date: 01 July 2025
Description: Python program that connects to a mongoFB database and retrieves user data.
"""

# Import the MongoClient
from pymongo import MongoClient

# Build a connection string to connect to 
client = MongoClient("mongodb+srv://web335_admin:dagweb335@bellevueuniversity.ujybkls.mongodb.net/?retryWrites=true&w=majority&appName=BellevueUniversity")

# Configure a variable to access the web335DB
db = client['web335DB']

# Simulating the printing of all users' first and last names
print("\n-----Printing all users' first and last names-----")
# Display all documents in the users' collection
# and only show the firstName and lastName fields
for user in db.users.find({}, {"_id": 0, "firstName": 1, "lastName": 1}):
    print(user)



#Simulating the printing of a user by employeeId
print("\n\n-----Printing a user by employeeId-----")
# Display a document where the employeeId is 1011
print(db.users.find_one({"employeeId": "1011"}))



# Simulating the printing of a user by lastName
print("\n\n-----Printing a user by lastName-----")
# Display a document where the lastName is Mozart
print(db.users.find_one({"lastName": "Mozart"}))