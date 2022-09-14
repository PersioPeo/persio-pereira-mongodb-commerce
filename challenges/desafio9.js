db.produtos.find({ valoresNutricionais: { $elemMatch: {
  tipo: "calorias",
  quantidade: { $lt: 500 } } } },
{ _di: false, nome: 1 });