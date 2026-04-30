db.employees.insertMany([
{eid:1, name:"A", salary:50000, dept:"HR"},
{eid:2, name:"B", salary:60000, dept:"IT"},
{eid:3, name:"C", salary:45000, dept:"HR"},
{eid:4, name:"D", salary:70000, dept:"IT"},
{eid:5, name:"E", salary:30000, dept:"Admin"}
]);

db.employees.find({salary:{$gt:50000}});

db.employees.updateMany(
{dept:"HR"},
{$inc:{salary:2000}}
);

db.employees.deleteMany({salary:{$lt:35000}});

db.employees.aggregate([
{$group:{_id:"$dept", avgSalary:{$avg:"$salary"}}}
]);