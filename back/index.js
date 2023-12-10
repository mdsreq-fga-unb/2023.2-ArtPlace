import express from "express";
import cors from "cors";
import { sql } from '@vercel/postgres';
import dotenv from 'dotenv';

import usuarioRouter from './routes/usuarioRoutes.js';
import produtoRouter from './routes/produtoRoutes.js';

const config = dotenv.config()
const app = express();
app.use(express.json());  // poder recebr requisições json sem erros 
app.use(cors());   // Permite que a API sejá consumida de origens diferentes

app.use('/api', usuarioRouter);
app.use('/api', produtoRouter);

app.get("/", (req, res) => {
  return res.json(`Api funcionando normalmente!`);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on ${port}`));


// // ### ROTAS PARA PRODUTOS
// const produtos = [];

// app.get("/produtos", (req, res) => {
//   return res.json(produtos);
// });

// app.post("/produtos", (req, res) => {
//   const { name, preco, material, avaliacao, id_artista } = req.body;

//   const newprodutos = {
//     id: Math.random().toString(36),
//     name,
//     preco,
//     material,
//     avaliacao,
//     id_artista,
//   };

//   produtos.push(newprodutos);
//   return res.json(newprodutos);
// });

// app.delete("/produtos/:id", (req, res) => {
//   const { id } = req.params;

//   const index = produtos.findIndex((user) => user.id === id);

//   if (index < 0) {
//     return res.status(404).json({ error });
//   }

//   produtos.splice(index, 1);
//   return res.status(204).json();
// });

// // Create tables

// app.get("/create_table", async (req, res) => {
//   try {
   
//     const result =
//       await sql`CREATE TABLE robson (
//         id VARCHAR(255) PRIMARY KEY,
//         nome VARCHAR(255),
//         email VARCHAR(255),
//         telefone VARCHAR(15)
//     );`;
//     return res.status(200).json({ result });
//   } catch (error) {
//     return res.status(500).json({ error});
//   }
// });

