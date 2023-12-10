import express from "express";
import { cadastrarUsuario, realizarLogin, editarUsuario } from '../controllers/usuarioController.js';

const router = express.Router();

router.post("/usuarios/cadastrar", cadastrarUsuario);
router.post("/usuarios/login", realizarLogin);
router.put("/usuarios/editar", editarUsuario);

export default router;