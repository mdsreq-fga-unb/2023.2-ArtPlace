import express from "express";
import {getAllArtistas, createTableArtistas} from '../controllers/artistaController.js'


const router = express.Router();

router.get("/users", getAllArtistas);

router.get("/users/createTable", createTableArtistas);

router.post("/users", (req, res) => {
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

router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  
  const index = users.findIndex((user) => user.id === id);
  
  if (index < 0) {
    return res.status(404).json({ error });
  }
  
  users.splice(index, 1);
  return res.status(204).json();
});

export default router;

