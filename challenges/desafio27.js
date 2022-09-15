db.produtos.updateMany(
  { valoresNutricionais: {
  $elemMatch: {
      tipo: "sódio",
      percentual: { $lt: 40, $gt: 20 },
  } } },
  { $push: { tags: "contém sódio" } },
  );

db.produtos.find({}, 
  { nome: 1, _id: false, tags: 1 },
  );