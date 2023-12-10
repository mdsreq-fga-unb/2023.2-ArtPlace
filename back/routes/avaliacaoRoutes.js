import express from 'express';
import { inserirAvaliacao, exibirAvaliacoesProduto  } from '../controllers/avaliacaoController.js';

const router = express.Router();

router.post("/avaliacao/inserir", inserirAvaliacao);
router.get("/avaliacao/exibir/:produto_id", exibirAvaliacoesProduto);

export default router;
