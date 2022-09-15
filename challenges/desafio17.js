db.resumoProdutos.insert(
  { franquia: "McDonalds",
   totalProdutos: db.produtos.count() },
);

db.resumoProdutos.find({}, 
  { franquia: 1,
_id: 0,
     totalProdutos: true });