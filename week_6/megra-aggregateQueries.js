/*
	Title: megra-aggregateQueries.js
    Author: Dagmawi Megra
    Date: 30 June 2025
    Description: MongoDB Shell aggregate queries using the houses and students collections.
 */

// A. Display all students
db.students.find();

// B. Add a new student to the students’ collection
student = {firstName: 'Sybil', lastName: 'McDonald', studentId: 's1019', houseId: 'h1011'};

db.students.insertOne(student);

// prove the new student was added successfully
db.students.findOne({firstName: 'Sybil'});

// C. Update one of the properties from the student you added in step B
db.students.updateOne({firstName: 'Sybil'}, {$set: {houseId: 'h1012'}});

// Prove the property was updated successfully
db.students.findOne({houseId: 'h1012'});

// D. Delete the student you created in step B.
db.students.deleteOne({firstName: 'Sybil'});

// Prove the student was deleted successfully
db.students.findOne({firstName: 'Sybil'});



/* 
    E. Display all students by house. The order should be:
        House
         Students
*/
db.houses.aggregate([{$lookup: {from: "students", localField: "houseId", foreignField: "houseId", as: "studentsDetails"}}]);


/* 
    F. Display all students in house Gryffindor. The order should be:
        Gryffindor
          Students
*/
db.students.aggregate([{ $lookup: { from: "houses", localField: "houseId", foreignField: "houseId", as: "houseDetails" }}, { $match: { "houseDetails.founder": "Godric Gryffindor" }}, { $project: { _id: 0, firstName: 1, lastName: 1, houseId: 1 }}]);



/*
    Display all students in the house with an Eagle mascot. The order should be:
        House
            Students
*/
db.houses.aggregate([{ $match: { mascot: "Eagle" } }, { $lookup: { from: "students", localField: "houseId", foreignField: "houseId", as: "studentsDetails" } }, { $project: { _id: 0, mascot: 1, studentsDetails: 1 } }]);