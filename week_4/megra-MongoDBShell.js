/*
	Title: megra-MongoDBShell.js
    Author: Dagmawi Megra
    Date: 17 June 2025
    Description: MongoDB Shell queries for the users collection.
 */


// Display all users in the collection
db.users.find();

// Display the user with the email address jbach@me.com
db.users.findOne({email:'jbach@me.com'});

// Display the user with the last name Mozart
db.users.findOne({lastName:'Mozart'});

// - Display the user with the first name Richard
db.users.findOne({firstName: 'Richard'});

// - Display the user with employeeId 1010
db.users.findOne({employeeId: '1010'});