db.produtos.updateMany({},
{ $pull: { ingredientes: "cebola" } });

db.produtos.find({},
{ nome: 1,
  _id: false,
  ingredientes: 1,
});