db.products.insertMany([
{pid:1, name:"P1", price:1000, stock:10},
{pid:2, name:"P2", price:2000, stock:0},
{pid:3, name:"P3", price:1500, stock:5},
{pid:4, name:"P4", price:3000, stock:2},
{pid:5, name:"P5", price:500, stock:0}
]);

db.products.find({stock:{$gt:0}});

db.products.updateMany(
{},
{$mul:{price:1.1}}
);

db.products.deleteMany({stock:0});

db.products.find().sort({price:1});