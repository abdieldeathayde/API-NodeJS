const mysql = require("mysql2/promise");

async function connect() {

  if (global.connection && global.connection.state !== "disconnected") {
    return global.connection;
  }

  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "88567731a",
    database: "testeNode",
    port: 3306
  });

  console.log("Conectou no MySQL!");

  global.connection = connection;

  return connection;
}


/* =========================
SELECT ORDER
========================= */

async function selectOrderByNumero(numeroPedido) {

  const conn = await connect();

  const sql = `
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
  `;

  const [rows] = await conn.query(sql, [numeroPedido]);

  return rows;
}


/* =========================
INSERT ORDER
========================= */

async function insertOrder(numeroPedido, valorTotal, dataCriacao) {

  const conn = await connect();

  const sql = `
        INSERT INTO orders 
        (numeroPedido, valorTotal, dataCriacao)
        VALUES (?,?,?)
    `;

  const values = [numeroPedido, valorTotal, dataCriacao];

  const [result] = await conn.query(sql, values);

  return result;
}


/* =========================
INSERT ITEM
========================= */

async function insertItem(order_id, idItem, quantidadeItem, valorItem) {

  const conn = await connect();

  const sql = `
        INSERT INTO order_items
        (order_id, idItem, quantidadeItem, valorItem)
        VALUES (?,?,?,?)
    `;

  const values = [order_id, idItem, quantidadeItem, valorItem];

  const [result] = await conn.query(sql, values);

  return result;
}


module.exports = {
  selectOrderByNumero,
  insertOrder,
  insertItem
};