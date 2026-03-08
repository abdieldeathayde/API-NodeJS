# 📦 API de Pedidos - Node.js + Express + MySQL

Esta é uma **API REST simples** desenvolvida com **Node.js**, **Express** e **MySQL**, que permite gerenciar pedidos e seus itens.

O projeto implementa operações básicas de **CRUD** utilizando boas práticas de organização e conexão com banco de dados.

---

# 🚀 Tecnologias utilizadas

* **Node.js**
* **Express**
* **MySQL**
* **mysql2**
* **Postman** (para testes da API)

---

# 📁 Estrutura do projeto

```
projeto-node-api
│
├── server.js        # Arquivo principal da aplicação
├── db.js            # Conexão e consultas ao banco de dados
├── package.json
└── README.md
```

---

# ⚙️ Instalação do projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-repositorio/projeto-node-api.git
```

### 2️⃣ Entrar na pasta do projeto

```bash
cd projeto-node-api
```

### 3️⃣ Instalar as dependências

```bash
npm install
```

Dependências utilizadas:

```bash
npm install express mysql2
```

---

# 🗄️ Configuração do Banco de Dados

Criar o banco:

```sql
CREATE DATABASE testeNode;
```

Selecionar o banco:

```sql
USE testeNode;
```

---

## Tabela de pedidos

```sql
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numeroPedido VARCHAR(50),
    valorTotal DECIMAL(10,2),
    dataCriacao DATE
);
```

---

## Tabela de itens do pedido

```sql
CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    idItem INT,
    quantidadeItem INT,
    valorItem DECIMAL(10,2),
    FOREIGN KEY (order_id) REFERENCES orders(id)
);
```

---

# ▶️ Executar a aplicação

```bash
node server.js
```

Se tudo estiver correto aparecerá:

```
Servidor rodando em http://localhost:3000
```

---

# 📡 Endpoints da API

## 📥 Criar pedido

### POST

```
POST /orders
```

### Body (JSON)

```json
{
  "numeroPedido": "PED123",
  "valorTotal": 150.50,
  "dataCriacao": "2025-06-01",
  "items": [
    {
      "idItem": 1,
      "quantidadeItem": 2,
      "valorItem": 50
    },
    {
      "idItem": 2,
      "quantidadeItem": 1,
      "valorItem": 50.5
    }
  ]
}
```

---

## 📄 Buscar pedido

### GET

```
GET /orders/:numeroPedido
```

### Exemplo

```
GET http://localhost:3000/orders/PED123
```

### Resposta

```json
{
  "numeroPedido": "PED123",
  "valorTotal": 150.5,
  "dataCriacao": "2025-06-01",
  "items": [
    {
      "idItem": 1,
      "quantidadeItem": 2,
      "valorItem": 50
    }
  ]
}
```

---

## ✏️ Atualizar pedido

### PUT

```
PUT /orders/:numeroPedido
```

---

## 🔧 Atualização parcial

### PATCH

```
PATCH /orders/:numeroPedido
```

---

## ❌ Deletar pedido

### DELETE

```
DELETE /orders/:numeroPedido
```

---

# 🧪 Testando com Postman

1. Abrir **Postman**
2. Criar nova requisição
3. Escolher o método (GET, POST, etc)
4. Usar a URL

Exemplo:

```
http://localhost:3000/orders
```

Para **POST**, enviar o **Body em JSON**.

---

# 📌 Melhorias futuras

Algumas melhorias que podem ser implementadas:

* ✔ Separação em **Controller / Service / Repository**
* ✔ Uso de **Connection Pool**
* ✔ Validação de dados com **Joi ou Zod**
* ✔ Documentação com **Swagger**
* ✔ Autenticação com **JWT**

---

# 👨‍💻 Autor

Projeto desenvolvido para estudo de **Node.js + API REST + MySQL**.
