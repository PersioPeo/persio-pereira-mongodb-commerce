db.produtos.find(
  { vendidos: { $lt: 100, $gt: 50 } },
  { vendidos: 1, _id: false, nome: 1 },
)
  .sort({ vendidos: 1 });