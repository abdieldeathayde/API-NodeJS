const db = require('../db');

// Criar pedido
const createOrder = async (req, res) => {
  try {
    const { customer_name, total } = req.body;

    const [result] = await db.execute(
      'INSERT INTO orders (customer_name, total) VALUES (?, ?)',
      [customer_name, total]
    );

    res.status(201).json({
      message: 'Pedido criado com sucesso',
      orderId: result.insertId
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Listar todos pedidos
const getOrders = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM orders');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Buscar pedido por id
const getOrderById = async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM orders WHERE id = ?',
      [req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }

    res.json(rows[0]);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getOrders,
  getOrderById
};