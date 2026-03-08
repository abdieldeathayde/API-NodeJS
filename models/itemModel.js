const pool = require('../db');

async function addItems(orderId, items) {
  for (const item of items) {
    await pool.query(
      'INSERT INTO Items (orderId, productId, quantity, price) VALUES (?, ?, ?, ?)',
      [orderId, item.productId, item.quantity, item.price]
    );
  }
}

async function getItems(orderId) {
  const [rows] = await pool.query('SELECT * FROM Items WHERE orderId = ?', [orderId]);
  return rows;
}

module.exports = { addItems, getItems };
