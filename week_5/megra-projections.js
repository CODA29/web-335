/*
	Title: megra-projections.js
    Author: Dagmawi Megra
    Date: 23 June 2025
    Description: MongoDB Shell queries for the users collection.
 */


// A. Add a new user to the user’s collection
user = {firstName: 'Dagmawi', lastName: 'Megra', employeeId: '1013', email: 'dmegra@me.com', dateCreated: new Date()};

db.users.insertOne(user);

// prove the new user was added successfully
db.users.findOne({firstName: 'Dagmawi'});


// B. Update Mozart’s email address to mozart@me.com
db.users.updateOne({lastName: 'Mozart'}, {$set: {email: 'mozart@me.com'}});

// prove the document was updated successfully.
db.users.findOne({lastName: 'Mozart'});


// C. Display all users in the collection. Use projections to 
// only show the first name, last name, and email address
db.users.find({}, {_id: 0, firstName: 1, lastName: 1, employeeId: 0, email: 1, dateCreated: 0});  