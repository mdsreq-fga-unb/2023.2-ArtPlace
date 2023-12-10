import express from "express";
import multer from "multer";

import {
  cadastrarUsuario,
  realizarLogin,
  salvarImagem,
  buscarImagem
} from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/usuarios/cadastrar", cadastrarUsuario);

router.post("/usuarios/login", realizarLogin);

//Teste de funções para trabalhar com imagens 
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.post("/imagem", upload.single('image'), salvarImagem);
router.get("/imagem", buscarImagem);

export default router;