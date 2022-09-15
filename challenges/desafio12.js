db.produtos.updateMany({ nome: { $ne: "McChiken" } },
{ $addToSet: { ingredientes: "ketchup" } });
db.produtos.find({}, { 
  nome: true, _id: false, ingredientes: 1 });