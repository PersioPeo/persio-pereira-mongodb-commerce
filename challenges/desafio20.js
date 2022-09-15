db.produtos.updateOne(
  { nome: "Quarteirão com Queijo" },
  { $pop: { ingredientes: -1 } },
);

db.produtos.find({},
  { 
    nome: 1,
    _id: false,
    ingredientes: 1,
  });