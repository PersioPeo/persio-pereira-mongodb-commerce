db.produtos.updateMany(
{ nome: { $in: ["Big Mac", "Quarterão com Queijo",
] } },
{ $push: { ingredientes: "bancon" } },
);

db.produtos.find({}, 
  {
    nome: 1,
    _id: 0,
    ingredientes: 1,
  });
