db.produtos.updateOne(
  { nome: "Big Mac" },
  { $set: { ultimaModificacao: true } },
);

db.produtos.find(
  { ultimaModificacao: { $exists: 1 } },
  { nome: true, _id: false },
);