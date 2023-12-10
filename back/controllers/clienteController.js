import { sql } from '@vercel/postgres';

const bcrypt = require('bcrypt');

export const cadastrarUsuario = async (req, res) => {
  try {
    const { nome, email, senha, telefone, isArtist } = req.body;
    const hashedSenha = await bcrypt.hash(senha, 10);

    const result = await sql`
      INSERT INTO usuarios (nome, email, senha, telefone)
      VALUES (${nome}, ${email}, ${hashedSenha}, ${telefone}, ${isArtist});
    `;

    return res.status(200).json({ message: 'Usuário cadastrado com sucesso!', result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
  }
};

export const realizarLogin = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuario = await sql`
      SELECT * FROM usuarios WHERE email = ${email};
    `;

    if (!usuario || usuario.length === 0) {
      return res.status(401).json({ error: 'Usuário não encontrado.' });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario[0].senha);

    if (!senhaCorreta) {
      return res.status(401).json({ error: 'Senha incorreta.' });
    }

    return res.status(200).json({ message: 'Login realizado com sucesso!', usuario: usuario[0] });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao realizar login.' });
  }
};