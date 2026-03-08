async function connect(){
if(global.connection && global. connection.state != 'disconnected')
return global. connection;

const mysql = require("mysql2/promise");
const connection = await mysql. createConnection("mysql://root:root@localhost:3306/crud");
console.log("Conectou no MySQL!");
global. connection = connection;
return connection;

}

const [result] = await connection.execute(
      'INSERT INTO usuarios (nome, email) VALUES (?, ?)',
      [nome, email]
    );


async function selectCustomers(){
const conn = await connect();
const [rows] = await conn.query('SELECT * FROM clientes;');
return rows;

}

module. exports = {selectCustomers}

const db = require("./db");