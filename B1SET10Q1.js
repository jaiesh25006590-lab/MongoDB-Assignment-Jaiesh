db.students.insertMany([
{sid:1, name:"A", dept:"CSE", marks:85},
{sid:2, name:"B", dept:"ISE", marks:70},
{sid:3, name:"C", dept:"CSE", marks:90},
{sid:4, name:"D", dept:"ECE", marks:60},
{sid:5, name:"E", dept:"CSE", marks:75}
]);

db.students.find({dept:"CSE"});

db.students.updateMany(
{dept:"CSE"},
{$inc:{marks:5}}
);

db.students.deleteMany({marks:{$lt:65}});

db.students.find().sort({marks:-1});