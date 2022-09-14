db.produtos.find({}, 
  { nome: 1, _id: false, vendidos: 1 })
  .sort({ vendidos: -1 }).limit(1);