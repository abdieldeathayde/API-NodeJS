const pool = require('../db');

async function createOrder(orderId, value, creationDate) {
  const [result] = await pool.query(
    'INSERT INTO `Order` (orderId, value, creationDate) VALUES (?, ?, ?)',
    [orderId, value, creationDate]
  );
  return result.insertId;
}

async function getOrder(orderId) {
  const [rows] = await pool.query('SELECT * FROM `Order` WHERE orderId = ?', [orderId]);
  return rows[0];
}

async function listOrders() {
  const [rows] = await pool.query('SELECT * FROM `Order`');
  return rows;
}

async function updateOrder(orderId, value) {
  await pool.query('UPDATE `Order` SET value = ? WHERE orderId = ?', [value, orderId]);
}

async function deleteOrder(orderId) {
  await pool.query('DELETE FROM `Order` WHERE orderId = ?', [orderId]);
}

module.exports = { createOrder, getOrder, listOrders, updateOrder, deleteOrder };
