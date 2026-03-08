const express = require("express");
const db = require("./db");

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


/* =========================
GET - Listar pedidos
========================= */
app.get("/order/:numeroPedido", async (req, res) => {

  const numeroPedido = req.body.numeroPedido;

  try {

    const pedidos = await db.query(`
      SELECT 
        o.numeroPedido,
        o.valorTotal,
        o.dataCriacao,
        i.idItem,
        i.quantidadeItem,
        i.valorItem
      FROM orders o
      LEFT JOIN order_items i 
      ON o.id = i.order_id
      WHERE o.numeroPedido = ?
    `, [numeroPedido]);

    if (pedidos.length === 0) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }

    const pedido = {
      numeroPedido: pedidos[0].numeroPedido,
      valorTotal: pedidos[0].valorTotal,
      dataCriacao: pedidos[0].dataCriacao,
      items: []
    };

    pedidos.forEach(row => {
      if (row.idItem) {
        pedido.items.push({
          idItem: row.idItem,
          quantidadeItem: row.quantidadeItem,
          valorItem: row.valorItem
        });
      }
    });

    res.json(pedido);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});


/* =========================
POST - Criar pedido
========================= */

app.post("/order", (req, res) => {

    const {numeroPedido, valorTotal, dataCriacao, items} = req.body;

    res.status(201).json({
        message: "Pedido criado com sucesso",
        pedido: {
            numeroPedido,
            valorTotal,
            dataCriacao,
            items
        }
    });

});


/* =========================
PUT - Atualizar
========================= */

app.put("/order/:numeroPedido", (req, res) => {

    const numeroPedido = req.params.numeroPedido;

    res.json({
        message: `Pedido ${numeroPedido} atualizado`
    });

});


/* =========================
PATCH
========================= */

app.patch("/order/:numeroPedido", (req, res) => {

    const numeroPedido = req.params.numeroPedido;

    res.json({
        message: `Pedido ${numeroPedido} atualizado parcialmente`
    });

});


/* =========================
DELETE
========================= */

app.delete("/order/:numeroPedido", (req, res) => {

    const numeroPedido = req.params.numeroPedido;

    res.json({
        message: `Pedido ${numeroPedido} deletado`
    });

});