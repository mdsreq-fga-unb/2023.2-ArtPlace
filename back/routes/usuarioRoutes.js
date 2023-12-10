import express from "express";

import { cadastrarUsuario } from '../controllers/usuarioController.js';
import { realizarLogin } from '../controllers/usuarioController.js';

const router = express.Router();

router.post("/usuarios/cadastrar", cadastrarUsuario);

router.post("/usuarios/login", realizarLogin);

export default router;