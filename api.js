const express = require("express");
const orderRoutes = require("./routes/orderRoutes");
const db = require("./db");

(async ()=>{

  const conn = await db.connect();

  const [rows] = await conn.query("SELECT 1");

  console.log("Banco funcionando:", rows);

})();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/order", orderRoutes);


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});