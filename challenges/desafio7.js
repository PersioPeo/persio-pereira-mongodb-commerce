db.produtos.find({ vendidos: { $ne: 50 }, tags: { $exists: false } },
  { _id: false, nome: 1, vendidos: 1 });