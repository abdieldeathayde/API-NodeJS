const mysql = require("mysql2/promise");

async function connect(){

  if(global.connection){
    return global.connection;
  }

  const connection = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"88567731",
    database:"testeNode"
  });

  console.log("Conectado ao MySQL");

  global.connection = connection;

  return connection;
}

async function query(sql,params){

  const conn = await connect();

  return conn.query(sql,params);

}

module.exports = {connect,query};