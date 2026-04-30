db.books.insertMany([
{bid:1, title:"T1", author:"A", price:500},
{bid:2, title:"T2", author:"B", price:700},
{bid:3, title:"T3", author:"A", price:400},
{bid:4, title:"T4", author:"C", price:900},
{bid:5, title:"T5", author:"B", price:300}
]);

db.books.find({author:"A"});

db.books.updateMany(
{author:"B"},
{$inc:{price:50}}
);

db.books.deleteMany({price:{$lt:350}});

db.books.aggregate([
{$group:{_id:"$author", totalBooks:{$sum:1}}}
]);