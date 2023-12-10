import express from "express";

import { cadastrarProduto } from '../controllers/produtoController.js';
import { editarProduto } from '../controllers/produtoController.js';
import { deletarProduto } from '../controllers/produtoController.js';
import { buscarProduto } from '../controllers/produtoController.js';

const router = express.Router();

router.post("/produto/cadastrar", cadastrarProduto);
router.post("/produto/editar/:id", editarProduto);
router.delete("/produto/deletar/:id", deletarProduto);
router.get("/produto/buscar/:id", buscarProduto);

export default router;