import express from "express";
import cors from "cors";
import { sql } from '@vercel/postgres';
import dotenv from 'dotenv';

dotenv.config()
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  return res.json(`Api funcionando normalmente!`);
});

// ### ROTAS PARA CLIENTES
const users = [];

app.get("/users", (req, res) => {
  return res.json(users);
});

app.post("/users", (req, res) => {
  const { name, email, telefone } = req.body;

  const newUser = {
    id: Math.random().toString(36),
    name,
    email,
    telefone,
  };

  users.push(newUser);
  return res.json(newUser);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  const index = users.findIndex((user) => user.id === id);

  if (index < 0) {
    return res.status(404).json({ error });
  }

  users.splice(index, 1);
  return res.status(204).json();
});

// ### ROTAS PARA ARTISTAS
const artistas = [];

app.get("/artistas", (req, res) => {
  return res.json(artistas);
});

app.post("/artistas", (req, res) => {
  const { name, email, telefone } = req.body;

  const newartistas = {
    id: Math.random().toString(36),
    name,
    email,
    telefone,
  };

  artistas.push(newartistas);
  return res.json(newartistas);
});

app.delete("/artistas/:id", (req, res) => {
  const { id } = req.params;

  const index = artistas.findIndex((user) => user.id === id);

  if (index < 0) {
    return res.status(404).json({ error });
  }

  artistas.splice(index, 1);
  return res.status(204).json();
});

// ### ROTAS PARA PRODUTOS
const produtos = [];

app.get("/produtos", (req, res) => {
  return res.json(produtos);
});

app.post("/produtos", (req, res) => {
  const { name, preco, material, avaliacao, id_artista } = req.body;

  const newprodutos = {
    id: Math.random().toString(36),
    name,
    preco,
    material,
    avaliacao,
    id_artista,
  };

  produtos.push(newprodutos);
  return res.json(newprodutos);
});

app.delete("/produtos/:id", (req, res) => {
  const { id } = req.params;

  const index = produtos.findIndex((user) => user.id === id);

  if (index < 0) {
    return res.status(404).json({ error });
  }

  produtos.splice(index, 1);
  return res.status(204).json();
});

// Create tables

app.get("/create_table", async (req, res) => {
  try {
   
    const result =
      await sql`CREATE TABLE robson (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255),
        email VARCHAR(255),
        telefone VARCHAR(15)
    );`;
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(500).json({ error});
  }
});

app.listen(port, () => console.log(`listening on ${port}`));
