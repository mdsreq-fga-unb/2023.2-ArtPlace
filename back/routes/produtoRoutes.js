import express from 'express';
import { cadastrarProduto } from '../controllers/produtoController';

const router = express.Router();

router.post("/produtos/cadastrar", cadastrarProduto);

export default router;
