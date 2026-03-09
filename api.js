const express = require("express");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(express.json());

app.use("/order", orderRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});