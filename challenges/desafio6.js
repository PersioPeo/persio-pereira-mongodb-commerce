db.produtos.find({ curtidas: { $gt: 10, $lt: 100 } },
  { curtidas: true, _id: false, nome: 1 });