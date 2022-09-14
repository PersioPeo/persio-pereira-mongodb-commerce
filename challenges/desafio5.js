db.produtos
.find({ $or: [{ curtidas: 36 }, { vendidos: 85 }] },
  { _id: false,
  nome: 1,
curtidas: 1,
vendidos: 1,
});