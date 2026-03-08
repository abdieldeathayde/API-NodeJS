const express = require("express");

const app = express();
const PORT = 3000;



const arrResponse = [
    { name: "Abdiel", company: "Company Name" }, 
    {name: "Alon", company: "HashTag Treinamentos" }];

app.use(express.json());

app.listen(PORT, () => {
  console.log(`O Servidor está rodando emn http://localhost:${PORT}`);
});

app.get("/order/{numeroPedido}", (req, res) => {
    
    const numeroPedido = req.params.numeroPedido;
    const valorTotal = req.params.valorTotal;
    const dataCriacao = req.params.dataCriacao;
    const items = [ {idItem: req.params.idItem, quantidadeItem: req.params.quantidadeItem, valorItem: req.params.valorItem}];

    res.json(arrResponse);
});

app.use(express.json());

app.post("/order/", (req, res) => {
    const numeroPedido = req.body.numeroPedido;
    const valorTotal = req.body.valorTotal;
    const dataCriacao = req.body.dataCriacao;
    const items = [ {idItem: req.body.idItem, quantidadeItem: req.body.quantidadeItem, valorItem: req.body.valorItem}];
    res.json({ message: "Data received successfully!" });
    res.status(200).send("Produto cadastrado com sucesso!")
    

    
});

app.put("/order/{numeroPedido}", (req, res) => {
    res.json({ message: "Order updated successfully!" });
});

app.patch("/order/{numeroPedido}", (req, res) => {
    res.json({ message: "Data partially updated successfully!" });
});

app.delete("/order/{numeroP edido}", (req, res) => {
    res.json({ message: "Data deleted successfully!" });
});



