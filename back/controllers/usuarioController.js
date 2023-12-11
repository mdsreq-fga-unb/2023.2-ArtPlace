import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

export const cadastrarUsuario = async (req, res) => {
  try {
    const { nome, email, senha, telefone, isArtist } = req.body;
    const hashedSenha = await bcrypt.hash(senha, 10);
    const result = await sql`
      INSERT INTO usuario (nome, email, senha, telefone, isArtist)
      VALUES (${nome}, ${email}, ${hashedSenha}, ${telefone}, ${isArtist});  
    `;

    return res.status(200).json({ message: 'Usuário cadastrado com sucesso!', result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

export const realizarLogin = async (req, res) => {
  try {
    const { email, senha } = req.body;
    console.log([email,senha])

    const usuario = await sql`
      SELECT * FROM usuario WHERE email = ${email};
    `;

    if (!usuario || usuario.length === 0) {
      return res.status(401).json({ error: 'Usuário não encontrado.' });
    }
    console.log(usuario)


    const usuarioData = usuario.rows[0]
    const senhaCorreta = await bcrypt.compare(senha, usuarioData.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ error: 'Senha incorreta.' });
    }

    return res.status(200).json({ message: 'Login realizado com sucesso!', usuario: usuarioData });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao realizar login.' });
  }
};


// Funções teste para trabalhar com imagens pfv, avisar o Renann 
// se for deletar
export const salvarImagem = async (req, res) => {
  try {
    const imagem = req.file.buffer;
    
    const result = await sql`
      INSERT INTO t3 (image_data)
      VALUES (${imagem});  
    `;

    return res.status(200).json({ message: 'Usuário cadastrado com sucesso!', result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

export const buscarImagem = async (req, res) => {
  try {
    const result = await sql`
      SELECT image_data
      FROM t3
      WHERE id = 1;  
    `;
    const resultRow = result.rows[0]

    return res.status(200).json({ message: 'Usuário cadastrado com sucesso!', result: resultRow });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

export const editarUsuario = async (req, res) => {
  try {
    const { id, nome, email, telefone, isArtist } = req.body;

    const result = await sql`
      UPDATE usuario
      SET nome = ${nome}, email = ${email}, telefone = ${telefone}, isArtist = ${isArtist}
      WHERE id = ${id};
    `;

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!', result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao editar usuário.' });
  }
};