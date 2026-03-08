const db = require("../db");

/* ========================
CREATE ORDER
======================== */
exports.createOrder = async (req, res) => {

  try {

    const { numeroPedido, valorTotal, dataCriacao, items } = req.body;

    if(!numeroPedido || !valorTotal || !dataCriacao){
      return res.status(400).json({error:"Campos obrigatórios faltando"});
    }

    /* MAPPING (exigido pelo teste) */
    const orderId = numeroPedido;
    const value = valorTotal;
    const creationDate = dataCriacao;

    await db.query(
      "INSERT INTO orders (orderId,value,creationDate) VALUES (?,?,?)",
      [orderId, value, creationDate]
    );

    if(items && items.length > 0){

      for(const item of items){

        const productId = item.idItem;
        const quantity = item.quantidadeItem;
        const price = item.valorItem;

        await db.query(
          "INSERT INTO items (orderId,productId,quantity,price) VALUES (?,?,?,?)",
          [orderId, productId, quantity, price]
        );

      }

    }

    res.status(201).json({
      message:"Pedido criado com sucesso",
      orderId
    });

  } catch(error){

    console.error(error);
    res.status(500).json({error:error.message});

  }

};


/* ========================
GET ORDER
======================== */
exports.getOrder = async (req,res)=>{

  const {orderId} = req.params;

  try{

    const [orders] = await db.query(
      "SELECT * FROM orders WHERE orderId=?",
      [orderId]
    );

    if(orders.length === 0){
      return res.status(404).json({error:"Pedido não encontrado"});
    }

    const [items] = await db.query(
      "SELECT productId, quantity, price FROM items WHERE orderId=?",
      [orderId]
    );

    res.json({
      orderId: orders[0].orderId,
      value: orders[0].value,
      creationDate: orders[0].creationDate,
      items
    });

  }catch(error){

    console.error(error);
    res.status(500).json({error:error.message});

  }

};


/* ========================
LIST ORDERS
======================== */
exports.listOrders = async (req,res)=>{

  try{

    const [orders] = await db.query("SELECT * FROM orders");

    res.json(orders);

  }catch(error){

    console.error(error);
    res.status(500).json({error:error.message});

  }

};


/* ========================
UPDATE ORDER
======================== */
exports.updateOrder = async (req,res)=>{

  try{

    const {orderId} = req.params;
    const {value} = req.body;

    await db.query(
      "UPDATE orders SET value=? WHERE orderId=?",
      [value,orderId]
    );

    res.json({message:"Pedido atualizado"});

  }catch(error){

    console.error(error);
    res.status(500).json({error:error.message});

  }

};


/* ========================
DELETE ORDER
======================== */
exports.deleteOrder = async (req,res)=>{

  try{

    const {orderId} = req.params;

    await db.query("DELETE FROM items WHERE orderId=?",[orderId]);
    await db.query("DELETE FROM orders WHERE orderId=?",[orderId]);

    res.json({message:"Pedido deletado"});

  }catch(error){

    console.error(error);
    res.status(500).json({error:error.message});

  }

};