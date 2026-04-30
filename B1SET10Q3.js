db.orders.insertMany([
{oid:1, cust:"A", amount:2000, status:"Pending"},
{oid:2, cust:"B", amount:5000, status:"Shipped"},
{oid:3, cust:"C", amount:3000, status:"Pending"},
{oid:4, cust:"A", amount:7000, status:"Delivered"},
{oid:5, cust:"B", amount:1500, status:"Pending"}
]);

db.orders.find({status:"Pending"});

db.orders.updateMany(
{status:"Pending"},
{$set:{status:"Shipped"}}
);

db.orders.deleteMany({amount:{$lt:2000}});

db.orders.aggregate([
{$group:{_id:"$cust", total:{$sum:"$amount"}}}
]);