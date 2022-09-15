db.produtos.updateMany({}, { $set: { criadoPor: "Ronald McDonald" } });
db.produtos.find({}, { nome: true, _id: 0, criadoPor: 1 });